import { ContentContainer } from '@/components/content-container';
import { ExternalLink } from '@/components/external-link';

type Publication = {
  authors: string[];
  href: string;
  id: string;
  publicationContext?: string;
  publicationName: string;
  title: string;
  year: string;
};

const PUBLICATIONS: Publication[] = [
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

const resolveAnd = (authorNumber: number, totalAuthors: number) => {
  if (totalAuthors === 1) {
    return '';
  }

  if (authorNumber + 1 === totalAuthors - 1) {
    return ', and ';
  }

  if (authorNumber + 1 === totalAuthors) {
    return '';
  }

  return ', ';
};

export default function PublicationsPage() {
  return (
    <ContentContainer title="Publications">
      <p>
        Below is a small sampling of recent publications. Please don't hesitate
        to reach out for additional writing samples or the most up-to-date
        publications.
      </p>
      <div className="flex flex-col gap-8 mt-4">
        {PUBLICATIONS.map(
          ({
            authors,
            href,
            id,
            publicationContext,
            publicationName,
            title,
            year,
          }) => (
            <div
              className="pl-2 border-l-2 border-l-lavender"
              key={id}
            >
              <p className="m-0">
                {authors.map(
                  (author, index) =>
                    `${author}${resolveAnd(index, authors.length)}`,
                )}
                . {year}. &ldquo;{title}.&rdquo; <em>{publicationName}</em>,{' '}
                {publicationContext}.{' '}
                <ExternalLink
                  ariaLabel={`A link to the ${title} publication`}
                  href={href}
                >
                  <em>Link</em>
                </ExternalLink>
              </p>
            </div>
          ),
        )}
      </div>
    </ContentContainer>
  );
}
