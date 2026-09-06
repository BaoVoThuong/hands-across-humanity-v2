/**
 * The one place a page is named.
 *
 * Every name used to be written out by hand in three places — the header nav,
 * the footer nav, and whatever each page passed as its own `nextLabel`. They
 * drifted, as hand-copied lists do: the header said "Mission" while the footer
 * said "Our Mission", the header said "Vision" while the footer said
 * "Vision & Values" for a page with no values section, and the footer listed
 * every page a second time under a different name again ("Meet the network",
 * "See donation activities"). A visitor had no way to tell that two names were
 * the same destination.
 *
 * Now the header, the footer, the reading chain and the document titles all
 * read from this array, so a rename happens once and cannot half-apply.
 */

export const SITE_NAME = 'Hands Across Humanity';
export const CONTACT_EMAIL = 'info@handsacrosshumanity.org';

export interface SitePage {
  key: string;
  /** The name shown wherever this page is referred to. Never varied. */
  name: string;
  href: string;
  /** How another page invites you here — the heading on the chain link. */
  cta: string;
  /** Browser tab. The entry page leads with the org, the rest with the page. */
  documentTitle: string;
}

/**
 * Reading order, and one grammatical shape for all five.
 *
 * The set used to mix three forms — a prepositional phrase (About Us), three
 * bare nouns, and one clause with a subject and verb (What We Do) — so the
 * header lost its rhythm at exactly those two items. Single nouns throughout.
 * "Work" is the site's own word for what it does, not a label imposed on it:
 * the pages already say "three habits shape the work" and "what the work has
 * looked like".
 *
 * The href stays /what-we-do/. Renaming a URL breaks every link anyone has
 * already shared, and that is a separate decision from what the nav calls it.
 */
export const PAGES: SitePage[] = [
  {
    key: 'about-us',
    name: 'About',
    href: '/about-us/',
    cta: 'Back to the overview',
    documentTitle: `${SITE_NAME} | Community Donation Network`,
  },
  {
    key: 'mission',
    name: 'Mission',
    href: '/mission/',
    cta: 'Read the mission',
    documentTitle: `Mission | ${SITE_NAME}`,
  },
  {
    key: 'what-we-do',
    name: 'Work',
    href: '/what-we-do/',
    cta: 'See the work',
    documentTitle: `Work | ${SITE_NAME}`,
  },
  {
    key: 'events',
    name: 'Events',
    href: '/events/',
    cta: 'See upcoming events',
    documentTitle: `Events | ${SITE_NAME}`,
  },
  {
    key: 'vision',
    name: 'Vision',
    href: '/vision/',
    cta: 'Read the vision',
    documentTitle: `Vision | ${SITE_NAME}`,
  },
];

const indexOf = (key: string) => PAGES.findIndex((p) => p.key === key);

export function pageOf(key: string): SitePage | undefined {
  return PAGES[indexOf(key)];
}

/** The chain loops, so Vision leads back to About Us and About Us back to Vision. */
export function nextPage(key: string): SitePage {
  const i = indexOf(key);
  return PAGES[(i + 1) % PAGES.length];
}

export function previousPage(key: string): SitePage {
  const i = indexOf(key);
  return PAGES[(i - 1 + PAGES.length) % PAGES.length];
}

/**
 * What the network actually shares. The footer and the What We Do hero both
 * name these, and they were written out separately in each — the same way the
 * page names drifted before this file existed.
 */
export interface FocusArea {
  title: string;
  text: string;
}

export const FOCUS_AREAS: FocusArea[] = [
  {
    title: 'Education and family',
    text: 'School kits and child-focused goods support learning and readiness.',
  },
  {
    title: 'Health and household',
    text: 'Everyday essentials help make difficult moments more manageable.',
  },
  {
    title: 'Community care',
    text: 'Welcoming distribution brings useful goods closer to the people who need them.',
  },
];
