import { ContentContainer } from '@/components/content-container';
import { ExternalLink } from '@/components/external-link';
import {
  StudentReview,
  type StudentReviewType,
} from '@/components/student-review';

const STUDENT_REVIEWS: StudentReviewType[] = [
  {
    authorAndCourse: 'Tutorial survey, Critical Media Studies W2024',
    quote: (
      <>
        Alora was an amazing TA, who made COMS 371 super enjoyable and
        interesting. They were{' '}
        <strong>
          always easy to contact, responsive and amazing at answering questions
          in tutorial and after class/tutorial
        </strong>
        . Please give Alora their flowers! I loved being in their tutorial
        block!
      </>
    ),
  },
  {
    authorAndCourse: 'Isabel, Influencer and Content Creator Cultures W2023',
    quote: (
      <>
        Alora was <strong>responsive and adaptive</strong> to her students&apos;
        needs both in class and outside of class; attending her lectures was
        always something to look forward to when{' '}
        <strong>
          I knew I would walk away having felt heard and truly involved in the
          material.
        </strong>{' '}
        She brought something special to the Department of Communication, Media,
        and Film.
      </>
    ),
  },
  {
    authorAndCourse: 'Glory, Influencer and Content Creator Cultures W2023',
    quote: (
      <>
        Aside from successfully{' '}
        <strong>championing one of the most futuristic courses</strong> to be
        known to Communications students at the U of C, Alora was a very
        relatable prof., this trait of hers made it so much easier for students
        like myself to{' '}
        <strong>reach out to her and ask for advice and support</strong>
      </>
    ),
  },
  {
    authorAndCourse:
      'Student feedback, Influencer and Content Creator Cultures W2023',
    quote: (
      <>
        I found that with this class I was able to{' '}
        <strong>experience my program in a way I never had prior</strong> and so
        I sincerely appreciated the experience.
      </>
    ),
  },
  {
    authorAndCourse: 'Tutorial survey, Critical Media Studies F2019',
    quote: (
      <>
        Really great! She led discussion groups during tutorial time, and when
        no one responded she was effective in asking further questions to
        bringing discussions back. <strong>Alora sparked conversations</strong>.
      </>
    ),
  },
];

export default function TeachingPage() {
  return (
    <ContentContainer title="Teaching">
      <h2>Teaching Philosophy</h2>
      <p>
        <strong>Three core beliefs</strong> underscore my approach to
        post-secondary teaching and learning. For me, effective teaching begins
        with a supportive environment. In my classroom, learners are
        collaborators who actively shape their experiences and outcomes with my
        support. I aim to foster an encouraging environment allowing learners to
        challenge themselves through productive discussion and authentic
        assessments.
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
        understands &ldquo;notions of listening, speaking, risk-taking, respect,
        reconciliation, and mutuality as central to its success.
        <sup>
          <a href="#reference-1">[1]</a>
        </sup>
        &rdquo;
      </p>
      <h2>Computer-mediated communication</h2>
      <p>
        This course introduces public relations (PR) students to online/digital
        communication in both the classroom and the computer lab. Participants
        learn to use the technologies and understand them sufficiently to advise
        others on their applications, strengths and weaknesses. Students become
        familiar with digital uses for the internet and social applications as
        they relate to communications and public relations.
      </p>
      <StudentReview
        authorAndCourse="Student email, April 2024 (PUBR 3867 W2024)"
        quote={
          <>
            As the semester comes to a close, I just wanted to thank you for
            your efforts to teach such an amazing class. Throughout the semester{' '}
            <strong>you created a healthy and engaging classroom</strong>, and I
            truly looked forward to your class (despite is being so late in the
            day & on a monday [sic]).{' '}
            <strong>
              Your teaching style is extremely engaging and I admire that from a
              professor as a neurodivergent student.
            </strong>{' '}
            Many professors, I feel, do not carry the same passion you do, not
            only in terms of the content you teach but the passion for your
            research as well. Overall, your class was so wonderful to attend.
            And I feel as though I can and have learnt alot [sic] from you.
          </>
        }
      />
      <h2>Influencers and content creator cultures</h2>
      <p>
        <em>
          In the winter of 2023, I developed a senior-level course for the
          Department of Communication, Media and Film. This course was the first
          of its kind in the department.
        </em>
      </p>
      <p>
        In this course, students delve into the world of social media
        influencers and digital content creators. The readings contextualize the
        emergence of &ldquo;the influencer&rdquo; as a mainstream identity and
        explore the thriving, multi-billion-dollar influencer industry by
        examining the interplay between creative labour, social media platform
        governance, and celebrity culture.
      </p>
      <p>
        The semester is divided into three units, each addressing a broad
        question:
      </p>
      <ol>
        <li>Who counts as an influencer?</li>
        <li>
          How do creators' intersecting identities shape their creative
          practices?
        </li>
        <li>
          What role do platform politics play in influencer cultures and
          economies?
        </li>
      </ol>
      <p>
        We adopt an intersectional approach, paying particular attention to how
        race, gender, sexuality, class, geographic location, and ability shape
        influencer cultures and economies. The course aims to identify the
        cultural, historical, economic, and political contexts from which
        influencers emerge and apply this critical knowledge to the digital
        media we engage with daily.
      </p>
      <StudentReview
        authorAndCourse="Student letter of support, COMS 401 W2023"
        quote={
          <>
            Alora is a <strong>passionate educator</strong>, which was most
            clearly demonstrated in how she designed her lectures to be engaging
            and shared both assigned and supplementary readings. As her syllabus
            was so brilliantly constructed, one of its most unique elements was
            the Coggle Mind Maps. It{' '}
            <strong>
              ensured students processed each reading and connected the
              course&apos;s broader concepts
            </strong>
            . Additionally, working in groups for these assignments{' '}
            <strong>encouraged valuable collaboration with peers.</strong>
          </>
        }
      />
      <h2>Critical media studies</h2>
      <p>
        This course emphasizes major critical approaches in communication and
        media studies with the intent of introducing students to the theoretical
        foundations of media and mass communication-related research. The course
        explores the contexts in which these theories arose, identifies their
        major strengths and weaknesses, and provides an appreciation of how
        critical theory engages the social world through research on
        communication and media. Areas to be covered include the culture
        industry, political economy of the media, cultural studies, feminist
        media studies, and critical race theory.
      </p>
      <StudentReview
        authorAndCourse="Natsach (COMS 371, S2022)"
        quote={
          <>
            Alora{' '}
            <strong>
              promotes student interaction and encourages critical thinking on
              challenging topics
            </strong>
            . While she retains her authority in the classroom, the environment
            is still interactive. Alora, being well-versed in a lot of topics,
            encourages the class to take little steps toward grasping a concept.{' '}
            <strong>
              She also facilitated my learning by making the educational process
              easier. This, by no means, lowered the educational standard;
              instead, the learning process was made to be engaging
            </strong>
            , which increased my understanding.
          </>
        }
      />
      <h2>Teaching assistantships</h2>
      <p>
        Throughout my graduate degrees, I was also a teaching assistant for 15
        courses (approx. 900 students), including Critical Media Studies,
        Research Methods, Visual Theory, Feminist Media Studies, Communication
        Theory, and Communication History.
      </p>
      <h2>Student feedback</h2>
      {STUDENT_REVIEWS.map(({ authorAndCourse, quote }) => (
        <StudentReview
          authorAndCourse={authorAndCourse}
          key={authorAndCourse}
          quote={quote}
        />
      ))}

      <div className="mt-20 pt-10 border-t border-t-yellow-600">
        <h3>References</h3>
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
  );
}
