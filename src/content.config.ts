import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Case studies. Each entry is a deep narrative, not a bullet list.
 *
 * Nothing confidential belongs in these files. Use only outcome metrics
 * that already appear in the public CV, and never internal programme
 * names, queries, code or screenshots.
 */
const work = defineCollection({
  loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    organisation: z.string(),
    // Key for the monochrome wordmark rendered by <Logo />.
    logo: z.string().optional(),
    role: z.string(),
    period: z.string(),
    // Lead image for cards and listings. The study itself uses <Figure>
    // inline, so a cover is a preview rather than a hero.
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    // Sort key. Lower numbers appear first on the index.
    order: z.number().default(99),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    // Headline outcomes rendered as a metric strip.
    outcomes: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .default([]),
    draft: z.boolean().default(false),
  }),
});

/**
 * Writing. Two kinds share one stream:
 *
 *  - essay: original long-form with a thesis
 *  - note:  shorter commentary on something read or watched
 */
const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    kind: z.enum(['essay', 'note']).default('essay'),
    tags: z.array(z.string()).default([]),
    // For reading notes, the thing being commented on.
    source: z
      .object({
        title: z.string(),
        url: z.string().url(),
        author: z.string().optional(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Radar. A ThoughtWorks Technology Radar applied to product practice
 * rather than technology: an opinionated, dated position on a practice,
 * placed in one of four rings.
 */
const radar = defineCollection({
  loader: glob({ base: './src/content/radar', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    ring: z.enum(['adopt', 'trial', 'assess', 'hold']),
    quadrant: z.enum([
      'Product practice',
      'Platform and delivery',
      'Security and compliance',
      'Ways of working',
    ]),
    blurb: z.string(),
    updated: z.coerce.date(),
    // Set when a position has changed since the previous edition.
    moved: z.enum(['new', 'moved-in', 'moved-out']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing, radar };
