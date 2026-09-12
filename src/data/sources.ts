/**
 * The source archive.
 *
 * Every external thing that documents a piece of the work: press coverage,
 * published reports, my own posts, and the reference material the case
 * studies lean on. Grouped by the role it belongs to and dated, so the
 * whole record can be navigated as one timeline.
 *
 * Adding one is a single entry in this array. The page does the sorting.
 */

export type RoleKey =
  | 'microsoft'
  | 'wise'
  | 'mpharma'
  | 'genkey'
  | 'education'
  | 'community';

export type SourceKind =
  | 'press'
  | 'post'
  | 'report'
  | 'article'
  | 'talk'
  | 'reference';

export interface Role {
  key: RoleKey;
  organisation: string;
  title: string;
  period: string;
  /** Sort key for the role rail. Lower is more recent. */
  order: number;
  /** Case study slug, when one exists. */
  work?: string;
}

export const roles: Role[] = [
  {
    key: 'microsoft',
    organisation: 'Microsoft',
    title: 'Product and program leadership',
    period: '2021 to present',
    order: 1,
    work: 'trusted-cloud-operations',
  },
  {
    key: 'wise',
    organisation: 'Wise',
    title: 'Expansion across Africa and the Middle East',
    period: '2019 to 2021',
    order: 2,
    work: 'wise-regional-expansion',
  },
  {
    key: 'mpharma',
    organisation: 'mPharma',
    title: 'Product Manager, Bloom and retail pharmacies',
    period: '2016 to 2019',
    order: 3,
    work: 'bloom-retail-pharmacies',
  },
  {
    key: 'genkey',
    organisation: 'ClaimSync and GenKey',
    title: 'Founder, then front-end and user experience after the acquisition',
    period: '2011 to 2016',
    order: 4,
    work: 'claimsync',
  },
  {
    key: 'education',
    organisation: 'Education',
    title: 'University of Ghana, MEST Africa, and executive education since',
    period: '2005 to 2020',
    order: 5,
  },
  {
    key: 'community',
    organisation: 'Community',
    title: 'Speaking, mentoring and writing',
    period: 'Ongoing',
    order: 6,
  },
];

export interface Source {
  /** Stable anchor. Used for deep links, so do not rename after publishing. */
  id: string;
  title: string;
  url: string;
  publisher: string;
  /** ISO date. Approximate dates are fine, but say so in the note. */
  date: string;
  role: RoleKey;
  kind: SourceKind;
  /** Why this source is here and what it evidences. */
  note?: string;
  /** True when I wrote or published it. */
  mine?: boolean;
}

export const sources: Source[] = [
  // Microsoft
  {
    id: 'devsecops-post',
    title: 'On shifting security left without slowing delivery',
    url: 'https://www.linkedin.com/posts/eyirenkyi_devsecops-activity-7427397763371266049-3x_X',
    publisher: 'LinkedIn',
    date: '2026-02-11',
    role: 'microsoft',
    kind: 'post',
    mine: true,
    note: 'Security work only holds if it is cheaper to comply than to route around it.',
  },
  {
    id: 'copilot-zendawa',
    title: 'Copilot and Zendawa in Kenyan pharmacies',
    url: 'https://msft.it/6040tCmqY',
    publisher: 'Microsoft',
    date: '2026-01-16',
    role: 'microsoft',
    kind: 'article',
    note: 'A full circle moment. The same pharmacy problem I worked on in 2016, now being addressed with AI in Kenya: less waste, better inventory, access to credit.',
  },
  {
    id: 'dx-report',
    title: 'What poor developer experience actually costs',
    url: 'https://www.linkedin.com/posts/eyirenkyi_developerexperience-dx-activity-7220068051759575042-2bap',
    publisher: 'LinkedIn',
    date: '2024-07-19',
    role: 'microsoft',
    kind: 'post',
    mine: true,
    note: 'On the finding that 500 developers losing eight hours a week costs roughly $6.9M a year. The argument underneath the developer platform work.',
  },
  {
    id: 'joining-microsoft',
    title: 'Joining Microsoft as a Program Manager in Teams and Skype',
    url: 'https://www.linkedin.com/posts/eyirenkyi_we-are-excited-emmanuel-bediako-addo-yirenkyi-activity-6889607143729750016-rqJL',
    publisher: 'LinkedIn',
    date: '2022-01-19',
    role: 'microsoft',
    kind: 'post',
    mine: true,
    note: 'With credit to the Black Product Managers Network, who made the path visible.',
  },
  {
    id: 'teams-skype-bpm',
    title: 'Teams, Skype and the Black Product Managers Network',
    url: 'https://www.linkedin.com/posts/eyirenkyi_teams-skype-bpm-activity-6793922951927353344-WNqV',
    publisher: 'LinkedIn',
    date: '2021-04-30',
    role: 'microsoft',
    kind: 'post',
    mine: true,
  },
  {
    id: 'ms-trust-center',
    title: 'Microsoft Trust Center: compliance offerings',
    url: 'https://www.microsoft.com/en-us/trust-center/compliance/compliance-overview',
    publisher: 'Microsoft',
    date: '2024-01-01',
    role: 'microsoft',
    kind: 'reference',
    note: 'The public frame for the compliance regimes the trusted cloud work sits inside. Living page, filed under the year I first used it.',
  },
  {
    id: 'ms-responsible-ai',
    title: 'Microsoft Responsible AI',
    url: 'https://www.microsoft.com/en-us/ai/responsible-ai',
    publisher: 'Microsoft',
    date: '2024-01-01',
    role: 'microsoft',
    kind: 'reference',
    note: 'The published principles the AI compliance case study builds on. Living page.',
  },
  {
    id: 'fedramp-offering',
    title: 'FedRAMP compliance offering',
    url: 'https://learn.microsoft.com/en-us/compliance/regulatory/offering-fedramp',
    publisher: 'Microsoft Learn',
    date: '2024-01-01',
    role: 'microsoft',
    kind: 'reference',
  },
  {
    id: 'azure-security-fundamentals',
    title: 'Azure security fundamentals',
    url: 'https://learn.microsoft.com/en-us/azure/security/fundamentals/',
    publisher: 'Microsoft Learn',
    date: '2024-01-01',
    role: 'microsoft',
    kind: 'reference',
  },

  // Wise
  {
    id: 'uae-live-post',
    title: 'Transfers from the UAE are now live',
    url: 'https://www.linkedin.com/posts/eyirenkyi_transfers-from-the-uae-are-now-live-activity-6656205544749096960-z18G',
    publisher: 'LinkedIn',
    date: '2020-04-15',
    role: 'wise',
    kind: 'post',
    mine: true,
    note: 'Launch day. Up to two times cheaper from the dirham, and fully regulated by the FSRA.',
  },
  {
    id: 'the-national-uae',
    title: 'Fintech unicorn TransferWise comes to the UAE',
    url: 'https://www.thenationalnews.com/business/fintech-unicorn-transferwise-comes-to-the-uae-1.1006073',
    publisher: 'The National',
    date: '2020-04-14',
    role: 'wise',
    kind: 'press',
    note: 'The fullest account of the launch: six months after the ADGM licence, 15,000 people pre-registered, 80 destination countries, and Abu Dhabi set up as the hub for the rest of the region.',
  },
  {
    id: 'gulf-news-uae',
    title: 'TransferWise launches online money transfer in UAE',
    url: 'https://gulfnews.com/business/transferwise-launches-online-money-transfer-in-uae-1.70988604',
    publisher: 'Gulf News',
    date: '2020-04-14',
    role: 'wise',
    kind: 'press',
  },
  {
    id: 'wise-ae',
    title: 'Wise in the UAE',
    url: 'https://wise.com/ae/',
    publisher: 'Wise',
    date: '2020-04-14',
    role: 'wise',
    kind: 'reference',
    note: 'The market that licence opened, still running.',
  },
  {
    id: 'adgm',
    title: 'Abu Dhabi Global Market',
    url: 'https://www.adgm.com/',
    publisher: 'ADGM',
    date: '2019-10-01',
    role: 'wise',
    kind: 'reference',
    note: 'The regulator whose FSRA licence, granted in October 2019, made the UAE launch possible.',
  },
  {
    id: 'wise-botswana',
    title: 'Send money to Botswana',
    url: 'https://wise.com/us/send-money/send-money-to-botswana',
    publisher: 'Wise',
    date: '2021-01-01',
    role: 'wise',
    kind: 'reference',
    note: 'A corridor that did not exist before this work. There was no press release, only a page that started working.',
  },
  {
    id: 'wise-nigeria',
    title: 'Send money to Nigeria',
    url: 'https://wise.com/us/send-money/send-money-to-nigeria',
    publisher: 'Wise',
    date: '2021-01-01',
    role: 'wise',
    kind: 'reference',
  },
  {
    id: 'wise-ghana',
    title: 'Send money to Ghana',
    url: 'https://wise.com/us/send-money/send-money-to-ghana',
    publisher: 'Wise',
    date: '2021-01-01',
    role: 'wise',
    kind: 'reference',
  },
  {
    id: 'wise-newsroom',
    title: 'Wise newsroom',
    url: 'https://newsroom.wise.com/releases/',
    publisher: 'Wise',
    date: '2021-06-01',
    role: 'wise',
    kind: 'reference',
  },

  // mPharma
  {
    id: 'mpharma-impact-2021',
    title: 'mPharma 2021 Impact Report',
    url: 'https://mpharma.com/wp-content/uploads/2022/04/Impact-Report-_mPharma-2021.pdf',
    publisher: 'mPharma',
    date: '2022-04-01',
    role: 'mpharma',
    kind: 'report',
    note: 'Bloom described as the operating system for community pharmacies in Africa: 250+ pharmacies, 290+ Mutti pharmacies in nine countries, Mutti membership above 150,000. Published after my time there.',
  },
  {
    id: 'mpharma-team-post',
    title: 'Amazing job by the mPharma team',
    url: 'https://www.linkedin.com/posts/eyirenkyi_amazing-job-by-the-mpharma-team-so-proud-activity-6773900873690030080-964s',
    publisher: 'LinkedIn',
    date: '2021-03-06',
    role: 'mpharma',
    kind: 'post',
    mine: true,
    note: 'Written after I had left, which is rather the point.',
  },
  {
    id: 'goodhealth-shops',
    title: 'Year in review: GoodHealth Shops',
    url: 'https://medium.com/mpharma-insights/year-in-review-goodhealth-shops-1aad1c922be7',
    publisher: 'mPharma Insights',
    date: '2020-12-01',
    role: 'mpharma',
    kind: 'article',
    note: 'Bloom on tablets in Nigerian PPMV shops, most of which had never had a formal way to record a sale. 4,120 Mutti members driving 65% of sales, and demand signals that caught a pandemic vitamin surge before anyone thought to ask for a report.',
  },
  {
    id: 'ui-patterns-onboarding',
    title: 'UI patterns for onboarding',
    url: 'https://medium.com/design-bootcamp/ui-patterns-for-onboarding-f65be266c4fb',
    publisher: 'Design Bootcamp',
    date: '2023-06-01',
    role: 'mpharma',
    kind: 'article',
    note: 'By Blessing Mikairu. A later look inside Bloom, covering how pharmacy onboarding was rebuilt with segmentation, empty states, checklists and nudges.',
  },
  {
    id: 'mpharma-site',
    title: 'mPharma',
    url: 'https://mpharma.com/',
    publisher: 'mPharma',
    date: '2019-11-01',
    role: 'mpharma',
    kind: 'reference',
  },

  // ClaimSync and GenKey
  {
    id: 'techcrunch-mest',
    title: 'MEST appoints a new managing director as it scales across Africa',
    url: 'https://techcrunch.com/2017/09/11/1538559/',
    publisher: 'TechCrunch',
    date: '2017-09-11',
    role: 'genkey',
    kind: 'press',
    note: 'Names ClaimSync as one of only two MEST portfolio companies to have been acquired. Founder outcomes in West Africa were not common in 2013, which is why the programme gets cited this way.',
  },
  {
    id: 'genkey',
    title: 'GenKey',
    url: 'https://www.genkey.com/',
    publisher: 'GenKey',
    date: '2016-01-01',
    role: 'genkey',
    kind: 'reference',
    note: 'The company that acquired ClaimSync, and where the claims work carried on into biometric voter registration.',
  },

  // Education and training
  {
    id: 'forbes-mest-expansion',
    title: 'Incubator and seed fund MEST expands to Lagos and Cape Town',
    url: 'https://www.forbes.com/sites/tobyshapshak/2017/11/23/incubator-and-seed-fund-mest-expands-to-lagos-and-cape-town/',
    publisher: 'Forbes',
    date: '2017-11-23',
    role: 'education',
    kind: 'press',
    note: 'By Toby Shapshak, on MEST growing beyond Accra. The training programme I came through, reported as it became pan-African.',
  },
  {
    id: 'mest-africa',
    title: 'MEST Africa',
    url: 'https://meltwater.org/',
    publisher: 'Meltwater Foundation',
    date: '2011-06-01',
    role: 'education',
    kind: 'reference',
    note: 'Two years of software, business and selling before the product is finished. ClaimSync came out of it.',
  },
  {
    id: 'university-of-ghana',
    title: 'University of Ghana',
    url: 'https://www.ug.edu.gh/',
    publisher: 'University of Ghana',
    date: '2020-11-01',
    role: 'education',
    kind: 'reference',
    note: 'BSc Biochemistry, 2005 to 2009, and an EMBA in Entrepreneurship Management, 2017 to 2020.',
  },
  {
    id: 'mit-sloan-exec',
    title: 'Implementing Enterprise-wide Transformation',
    url: 'https://executive.mit.edu/',
    publisher: 'MIT Sloan School of Management',
    date: '2018-01-15',
    role: 'education',
    kind: 'reference',
  },
  {
    id: 'yale-som-exec',
    title: 'Executive education',
    url: 'https://som.yale.edu/programs/executive-education',
    publisher: 'Yale School of Management',
    date: '2018-01-10',
    role: 'education',
    kind: 'reference',
  },

  // Community
  {
    id: 'teknexus-2024',
    title: 'TekNexus Africa: growing your value in the tech economy',
    url: 'https://www.linkedin.com/posts/eyirenkyi_meet-our-4th-speaker-for-the-teknexus-africa-activity-7208556065699835906-7k50',
    publisher: 'TekNexus Africa',
    date: '2024-06-17',
    role: 'community',
    kind: 'talk',
    note: 'Panel on income, impact and influence, 21 to 22 June 2024.',
  },
  {
    id: 'webinar-episode-2',
    title: 'Webinar series, episode two',
    url: 'https://www.linkedin.com/posts/eyirenkyi_episode-2-of-our-upcoming-webinar-series-activity-6859115447543967745-RG44',
    publisher: 'LinkedIn',
    date: '2021-10-27',
    role: 'community',
    kind: 'talk',
    mine: true,
  },
  {
    id: 'thoughtworks-radar',
    title: 'Technology Radar',
    url: 'https://www.thoughtworks.com/radar',
    publisher: 'ThoughtWorks',
    date: '2024-04-01',
    role: 'community',
    kind: 'reference',
    note: 'The format I borrowed for my own radar, and the reason I date my positions rather than pretend they are permanent.',
  },
];

export const kindLabels: Record<SourceKind, string> = {
  press: 'Press',
  post: 'Post',
  report: 'Report',
  article: 'Article',
  talk: 'Talk',
  reference: 'Reference',
};

export function roleFor(key: RoleKey): Role {
  const found = roles.find((r) => r.key === key);
  if (!found) throw new Error(`Unknown role: ${key}`);
  return found;
}

/** Newest first. */
export function sortedSources(): Source[] {
  return [...sources].sort((a, b) => b.date.localeCompare(a.date));
}
