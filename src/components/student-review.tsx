import { type ReactNode } from 'react';

export type StudentReviewType = { authorAndCourse: string; quote: ReactNode };

export const StudentReview = ({
  authorAndCourse,
  quote,
}: StudentReviewType) => {
  return (
    <blockquote>
      <p>
        &ldquo;{quote}&rdquo; – <em>{authorAndCourse}</em>
      </p>
    </blockquote>
  );
};
