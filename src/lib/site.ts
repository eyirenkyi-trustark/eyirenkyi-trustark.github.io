/**
 * Single source of truth for site-wide constants.
 * Change contact details or navigation here, not in individual pages.
 */

export const site = {
  title: 'Emmanuel Addo-Yirenkyi',
  shortTitle: 'Emmanuel Addo-Yirenkyi',
  role: 'Product and Program Leadership',
  description:
    'Product and program leader working on security, compliance and developer platforms. Writing weekly about building trustworthy systems at scale.',
  url: 'https://eyirenkyi.github.io',
  locale: 'en',
  location: 'Atlanta, Georgia',
  email: 'eaddoyirenkyi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/eyirenkyi',
  cvPath: '/Emmanuel-Addo-Yirenkyi-CV.pdf',
} as const;

export const nav = [
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Now', href: '/now' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * Formspree endpoint for the contact form.
 * Replace the placeholder with the real form ID once the account exists.
 * The ID is public by design and safe to commit.
 */
export const contact = {
  formspreeId: 'YOUR_FORM_ID',
  get action() {
    return `https://formspree.io/f/${this.formspreeId}`;
  },
  get configured() {
    return this.formspreeId !== 'YOUR_FORM_ID';
  },
} as const;

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0] as string;
}
