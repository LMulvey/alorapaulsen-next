import { type ReactNode } from 'react';

export type StudentReviewType = { authorAndCourse: string; quote: ReactNode };

export const StudentReview = ({
  authorAndCourse,
  quote,
}: StudentReviewType) => {
  return (
    <blockquote>
      <p className="mb-2">&ldquo;{quote}&rdquo;</p>
      <em className="ml-2">&mdash; {authorAndCourse}</em>
    </blockquote>
  );
};
