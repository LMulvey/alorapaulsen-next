import { MEDIA_APPEARANCES, PRESENTATIONS, PUBLICATIONS } from './data';
import { ContentContainer } from '@/components/content-container';
import { ExternalLink } from '@/components/external-link';
import { type ReactNode } from 'react';

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

const ResearchEntry = ({
  children,
  date,
  description,
  title,
}: {
  children: ReactNode;
  date: Date;
  description: string;
  title: string;
}) => {
  return (
    <div className="border-b pb-4 pl-8">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm text-gray-600">
        {date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </p>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default function ResearchPage() {
  return (
    <ContentContainer title="Research">
      <h2
        className="mt-20 mb-0"
        id="presentations"
      >
        Presentations & Conference Appearances
      </h2>
      <div className="flex flex-col gap-4">
        {PRESENTATIONS.map(({ date, description, links, title }) => (
          <ResearchEntry
            date={date}
            description={description}
            key={`presentation-${title}`}
            title={title}
          >
            <div className="flex flex-wrap gap-2 mt-2">
              {links.map(({ href, title: linkTitle }) => (
                <ExternalLink
                  ariaLabel={`Open ${linkTitle} in a new tab`}
                  className="text-blue-500 underline"
                  href={href}
                  key={href}
                >
                  {linkTitle}
                </ExternalLink>
              ))}
            </div>
          </ResearchEntry>
        ))}
      </div>

      <h2
        className="mt-20 mb-0"
        id="media-appearances"
      >
        Media appearances
      </h2>
      <div className="flex flex-col gap-4">
        {MEDIA_APPEARANCES.map(({ date, description, title, url }) => {
          const isAudio = url.endsWith('.mp3') || url.endsWith('.wav');
          return (
            <ResearchEntry
              date={date}
              description={description}
              key={`presentation-${title}`}
              title={title}
            >
              {isAudio ? (
                <audio
                  className="mt-2"
                  controls
                >
                  <source
                    src={url}
                    type={`audio/${url.split('.').pop()}`}
                  />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <ExternalLink
                  ariaLabel={`Open ${title} in a new tab`}
                  href={url}
                >
                  View appearance
                </ExternalLink>
              )}
            </ResearchEntry>
          );
        })}
      </div>
      <h2
        className="mt-20"
        id="publications"
      >
        Publications
      </h2>
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
