import { COURSES, STUDENT_REVIEWS, tocItems } from './data';
import { ContentContainer } from '@/components/content-container';
import { ExternalLink } from '@/components/external-link';
import { HeadingOne } from '@/components/heading';
import { StudentReview } from '@/components/student-review';
import { TableOfContents } from '@/components/table-of-contents';
import { Presentation } from '@phosphor-icons/react/dist/ssr';

export default function TeachingPage() {
  return (
    <>
      <TableOfContents items={tocItems} />
      <ContentContainer title="Overview">
        <h2>Teaching Philosophy</h2>
        <p>
          <strong>Three core beliefs</strong> underscore my approach to
          post-secondary teaching and learning. For me, effective teaching
          begins with a supportive environment. In my classroom, learners are
          collaborators who actively shape their experiences and outcomes with
          my support. I aim to foster an encouraging environment allowing
          learners to challenge themselves through productive discussion and
          authentic assessments.
        </p>
        <ul>
          <li>
            <strong>Acknowledgement:</strong> Being mindful of learners&apos;
            intersecting identities and power relations in the classroom is
            essential to a productive learning environment.
          </li>
          <li>
            <strong>Collaboration:</strong> Learners are active participants in
            the learning process.
          </li>
          <li>
            <strong>Encouragement and empowerment:</strong> As an instructor, I
            work to foster an empowering environment that challenges learners.
          </li>
        </ul>
        <p>
          As an educator, I am deeply committed to fostering a respectful,
          inclusive, and supportive learning environment rooted in feminist
          pedagogy. Feminist pedagogy considers the classroom a community that
          understands &ldquo;notions of listening, speaking, risk-taking,
          respect, reconciliation, and mutuality as central to its success.
          <sup>
            <a href="#reference-1">[1]</a>
          </sup>
          &rdquo;
        </p>

        <HeadingOne
          className="mt-20"
          id="courses"
        >
          Courses
        </HeadingOne>
        {COURSES.map(
          ({ description, id, samplePresentations, studentReview, title }) => (
            <div key={id}>
              <h2
                className="mb-1"
                id={id}
              >
                {title}
              </h2>
              {samplePresentations.length ? (
                <p className="text-sm italic flex items-center gap-2 px-3 py-2 rounded-lg bg-nostalgic-yellow/80 whitespace-nowrap flex-wrap">
                  <Presentation size={16} />
                  <span>Sample presentations:</span>
                  {samplePresentations.map((presentation) => (
                    <ExternalLink
                      ariaLabel={`Link to ${presentation.title}`}
                      className="text-sm flex items-center gap-2 &:not(:last-child):border-r &:not(:last-child):border-r-black"
                      href={presentation.url}
                      key={presentation.url}
                    >
                      {presentation.title}
                    </ExternalLink>
                  ))}
                </p>
              ) : null}
              <div>{description}</div>
              <StudentReview
                authorAndCourse={studentReview.authorAndCourse}
                quote={studentReview.quote}
              />
            </div>
          ),
        )}

        <HeadingOne
          className="mt-20"
          id="other"
        >
          Other
        </HeadingOne>
        <h2 id="teaching-assistantships">Teaching assistantships</h2>
        <p>
          Throughout my graduate degrees, I was also a teaching assistant for 15
          courses (approx. 900 students), including Critical Media Studies,
          Research Methods, Visual Theory, Feminist Media Studies, Communication
          Theory, and Communication History.
        </p>
        <h2 id="student-feedback">Student feedback</h2>
        {STUDENT_REVIEWS.map(({ authorAndCourse, quote }) => (
          <StudentReview
            authorAndCourse={authorAndCourse}
            key={authorAndCourse}
            quote={quote}
          />
        ))}
        <div className="mt-20 pt-10 border-t border-t-black">
          <h2 id="references">References</h2>
          <p
            className="text-xs italic"
            id="reference-1"
          >
            [1] Bostow, R., Brewer, S., Chick, N., Galina, B., McGrath, A.,
            Mendoza, K., Navarro, K., & Valle-Ruiz, L. (2015). The importance of
            community. Retrieved from{' '}
            <ExternalLink
              ariaLabel="Link to https://my.vanderbilt.edu/femped/habits-of-heart/community/"
              href="https://my.vanderbilt.edu/femped/habits-of-heart/community/"
            >
              https://my.vanderbilt.edu/femped/habits-of-heart/community/
            </ExternalLink>
          </p>
        </div>
      </ContentContainer>
    </>
  );
}
