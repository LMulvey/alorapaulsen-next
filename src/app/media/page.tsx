import { MEDIA_APPEARANCES, PUBLICATIONS } from './data';
import { ContentContainer } from '@/components/content-container';
import { ExternalLink } from '@/components/external-link';

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
    <ContentContainer title="Media">
      <h2
        className="mt-20 mb-0"
        id="media-appearances"
      >
        Media appearances
      </h2>
      <div className="flex flex-col gap-4 ml-8">
        {MEDIA_APPEARANCES.map(({ date, description, title, url }) => {
          const isAudio = url.endsWith('.mp3') || url.endsWith('.wav');
          return (
            <div
              className="border-b pb-4"
              key={title}
            >
              <h3 className="font-bold">{title}</h3>
              <p className="text-sm text-gray-600">
                {date.toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <p>{description}</p>
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
                  className="text-blue-500 underline"
                  href={url}
                >
                  Open Appearance
                </ExternalLink>
              )}
            </div>
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
