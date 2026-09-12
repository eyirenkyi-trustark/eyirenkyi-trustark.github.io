# Publishing

The whole point of this setup is that a weekly post is **one file and one commit**.

## Publish a post

1. Create a file in `src/content/writing/`, named as a slug:

   ```
   src/content/writing/why-stock-outs-are-clinical-events.mdx
   ```

2. Give it frontmatter:

   ```yaml
   ---
   title: 'Why stock-outs are clinical events'
   description: 'One sentence that makes someone want to read it.'
   pubDate: 2026-09-19
   kind: essay # or: note
   tags: ['Health tech', 'Product']
   ---
   ```

   For a reading note, add the thing you are responding to:

   ```yaml
   kind: note
   source:
     title: 'The Bus Ticket Theory of Genius'
     url: 'https://paulgraham.com/genius.html'
     author: 'Paul Graham'
   ```

3. Write the body in Markdown below the frontmatter.

4. Commit and push to `main`.

GitHub Actions builds and deploys. Nothing else to do. The post appears on
`/writing`, in `/rss.xml` and in the sitemap automatically.

## Add a case study

Same idea, in `src/content/work/`:

```yaml
---
title: 'Growing Wise across Africa'
summary: 'One or two sentences.'
organisation: Wise
logo: wise # optional, matches a key in src/components/Logo.astro
role: 'Product Manager, MEA and Regional Expansion'
period: 'Dec 2019 to Jan 2021'
order: 4 # lower sorts first
featured: true # show on the home page
tags: ['Fintech', 'Regulation']
outcomes:
  - value: 'Botswana'
    label: 'New payout corridor opened'
---
```

Keep the five-part structure: Context, Approach, My role, Outcome, What I would do
differently. Then a `## References` list of public links.

## The confidentiality rule

Non-negotiable, because this site is public and the work is not.

**Publish:** employer name, role, dates, problem framing, operating mechanisms,
generalised approach, transferable lessons, and outcome metrics that already appear in
the public CV.

**Never publish:** internal programme or code names, queries, pipeline or repo names,
screenshots of internal tooling, dashboards, incident data, service inventories, org
charts, or partner team names.

Every case study carries a provenance line in the footer stating this. If something feels
borderline, it is. Leave it out.

## Drafting

Set `draft: true` in frontmatter. Drafts are excluded from the build, the index pages,
RSS and the sitemap.

## Local development

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # validates all frontmatter against the schema
```

`npm run build` is the real check. A frontmatter mistake fails the build rather than
shipping broken.

## House style

- Plain English. Short, direct sentences. Active voice.
- No em dashes.
- No "leveraged", "spearheaded", "passionate about".
- Say the number or do not make the claim.
