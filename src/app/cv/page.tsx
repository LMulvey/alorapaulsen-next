import { ContentContainer } from '@/components/content-container';
import { ResumeIcon } from '@/components/icons';
import Link from 'next/link';

const RESUME_FILEPATH = 'A Paulsen Mulvey - Curriculum Vitae (Web).pdf';
const LAST_UPDATED = 'November 2024';

export default function CVPage() {
  return (
    <ContentContainer title="Curriculum Vitae (CV)">
      <p>
        Please find my most up-to-date CV as of {LAST_UPDATED}. References and
        writing samples can be provided upon request. Do not hesitate to contact
        me for any questions!
      </p>
      <p className="flex flex-row items-center gap-2 pl-4">
        <ResumeIcon size={16} />
        <Link
          aria-label="View CV"
          href={`/downloads/${RESUME_FILEPATH}`}
          target="_blank"
        >
          View CV (opens in a new window)
        </Link>
      </p>
    </ContentContainer>
  );
}
