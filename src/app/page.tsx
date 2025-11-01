import { ContentContainer } from '@/components/content-container';
import { ExternalLink } from '@/components/external-link';
import Image from 'next/image';

export default function Home() {
  return (
    <ContentContainer title="Welcome!">
      <p>
        <span role="img">👋🏼</span> I'm Dr. Alora Paulsen Mulvey and I&apos;m a
        feminist media studies researcher and instructor of record at the{' '}
        <ExternalLink
          ariaLabel="A link to University of Calgary's website"
          href="https://ucalgary.ca/"
        >
          University of Calgary
        </ExternalLink>
        .
      </p>
      <p>
        My doctoral research investigates the relationship between the attention
        economy, care and community, and mom influencers. My four-year study,
        &ldquo;#Momfluencers: Community, Care, and Resistance in the Social
        Media Entertainment Industry&rdquo; argues the cultural figure of the
        momfluencer shapes contemporary ideas about the family, motherhood,
        femininity, and celebrity.
      </p>
      <p>
        My collaborative research on the attention economy, feminized media
        production, and digital activism has been published in{' '}
        <ExternalLink
          ariaLabel="A link to Alora's article DOI entry for Social Media and Society journal"
          href="https://doi.org/10.1177/20563051231205594"
        >
          <em>Social Media and Society</em>
        </ExternalLink>{' '}
        and{' '}
        <ExternalLink
          ariaLabel="A link to Alora's article published in The Conversation Canada"
          href="https://theconversation.com/this-halloween-witches-are-casting-spells-to-defeat-trump-and-witchthevote-in-the-u-s-election-148213"
        >
          <em>The Conversation Canada</em>
        </ExternalLink>
        .
      </p>
      <p className="pt-10 mt-10 border-t border-t-lavender-100/70">
        In February 2025, I was honoured with the 2024 Graduate Student Teaching
        Award at the University of Calgary. This institution-wide award
        recognizes excellence in teaching and learning.
      </p>
      <div className="w-full relative aspect-[16/9] rounded-lg overflow-visible">
        <Image
          alt="Recipient of the 2024 Graduate Assistants Teaching Award at University of Calgary"
          fill
          src="/images/alora-teaching-award-2025.png"
        />
      </div>
    </ContentContainer>
  );
}
