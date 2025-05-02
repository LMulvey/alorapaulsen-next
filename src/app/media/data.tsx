type Publication = {
  authors: string[];
  href: string;
  id: string;
  publicationContext?: string;
  publicationName: string;
  title: string;
  year: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    authors: ['Paulsen Mulvey, Alora', 'Jessalynn Keller'],
    href: 'https://doi.org/10.1177/20563051231205594',
    id: 'paulsen-mulvey-keller-2023',
    publicationContext: '9(4)',
    publicationName: 'Social Media + Society',
    title:
      'Brooms and Ballots: #WitchTheVote, the Nostalgic Internet, and Intersectional Feminist Politics on Instagram',
    year: '2023',
  },
  {
    authors: [
      'Thomas, Andrew',
      'Alora Paulsen Mulvey',
      'Dana Cramer',
      'Amanda Zanco',
    ],
    href: 'https://doi.org/10.21810/strm.v13i1.301',
    id: 'thomas-et-al-2021',
    publicationContext: 'Special Issue: Crisis!: 51-66',
    publicationName: 'Stream: Interdisciplinary Journal of Communication',
    title:
      "Graduate Students' Exploration of Opportunities in a Crisis: A White Paper",
    year: '2021',
  },
  {
    authors: ['Keller, Jessalynn', 'Alora Paulsen Mulvey'],
    href: 'https://theconversation.com/this-halloween-witches-are-casting-spells-to-defeat-trump-and-witchthevote-in-the-u-s-election-148213',
    id: 'keller-paulsen-mulvey-2020',
    publicationContext: 'October 29, 2020',
    publicationName: 'The Conversation Canada',
    title:
      'This Halloween, Witches Are Casting Spells to Defeat Donald Trump and #WitchTheVote in the U.S. election',
    year: '2020',
  },
  {
    authors: ['Paulsen Mulvey, Alora'],
    href: 'https://doi.org/10.21810/strm.v11i1.263',
    id: 'paulsen-mulvey-2019',
    publicationContext:
      'Special Issue: CCA 2018 Conference Proceedings: Graduate Papers',
    publicationName: 'Stream: Interdisciplinary Journal of Communication',
    title: '#Femtalk and Beauty Hauls: Selling the Self on YouTube',
    year: '2019',
  },
];

type MediaAppearance = {
  date: Date;
  description: string;
  title: string;
  url: string;
};

export const MEDIA_APPEARANCES: MediaAppearance[] = [
  {
    date: new Date('2025-04-04 11:00:00'),
    description:
      'Appearance on the popular 880 CHED radio show to discuss deeper meanings behind a White Lotus clip going viral on TikTok.',
    title: 'This Morning with Stacey Brotzel',
    url: '/downloads/Alora - Morning with Stacey Brotzel (April 4 2025).mp3',
  },
];
