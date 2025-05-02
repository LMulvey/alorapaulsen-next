import { type StudentReviewType } from '@/components/student-review';
import { type TOCItem } from '@/components/table-of-contents';
import { type ReactNode } from 'react';

type SamplePresentation = {
  title: string;
  url: string;
};

type Course = {
  description: ReactNode;
  id: string;
  samplePresentations: SamplePresentation[];
  studentReview: StudentReviewType;
  title: string;
};

export const COURSES: Course[] = [
  {
    description: (
      <>
        This course introduces critical tools for deconstructing and evaluating
        the social significance of popular cultural texts, including music,
        television, film, advertising, memes, and viral content. Audience
        reception as a key method for understanding fan practices and
        subcultures is central to our class discussions. We emphasize critical
        and intersectional approaches to examining popular culture.
      </>
    ),
    id: 'popular-culture',
    samplePresentations: [
      {
        title: 'Fandom, Forums, and Anti-fans',
        url: 'https://www.canva.com/design/DAGi3fL0sxA/W6teKHgGogq11fTe10-DHg/view',
      },
    ],
    studentReview: {
      authorAndCourse: 'Student reflection, Popular Culture, Winter 2025',
      quote: (
        <>
          This class has enabled me to understand pop culture through a
          <strong>scholarly lens</strong>. Thank you for making the classes{' '}
          <strong>very engaging and interactive</strong>. It motivated us to
          come to class and engage in discussions. You were also{' '}
          <strong>very approachable</strong>, which enabled us to express our
          ideas and questions freely.
        </>
      ),
    },
    title: 'Popular Culture',
  },
  {
    description: (
      <>
        This course introduces public relations (PR) students to online/digital
        communication in both the classroom and the computer lab. Participants
        learn to use the technologies and understand them sufficiently to advise
        others on their applications, strengths, and weaknesses. Students become
        familiar with digital uses for the internet and social applications as
        they relate to communications and public relations.
      </>
    ),
    id: 'computer-mediated-communications',
    samplePresentations: [],
    studentReview: {
      authorAndCourse: 'Student email, April 2024 (PUBR 3867 W2024)',
      quote: (
        <>
          As the semester comes to a close, I just wanted to thank you for your
          efforts to teach such an amazing class. Throughout the semester{' '}
          <strong>you created a healthy and engaging classroom</strong>, and I
          truly looked forward to your class (despite it being so late in the
          day & on a Monday).{' '}
          <strong>
            Your teaching style is extremely engaging and I admire that from a
            professor as a neurodivergent student.
          </strong>{' '}
          Many professors, I feel, do not carry the same passion you do, not
          only in terms of the content you teach but the passion for your
          research as well. Overall, your class was so wonderful to attend. And
          I feel as though I can and have learnt a lot from you.
        </>
      ),
    },
    title: 'Computer-mediated communication',
  },
  {
    description: (
      <>
        <em>
          In the winter of 2023, I developed a senior-level course for the
          Department of Communication, Media and Film. This course was the first
          of its kind in the department.
        </em>
        <p>
          In this course, students delve into the world of social media
          influencers and digital content creators. The readings contextualize
          the emergence of &ldquo;the influencer&rdquo; as a mainstream identity
          and explore the thriving, multi-billion-dollar influencer industry by
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
          We adopt an intersectional approach, paying particular attention to
          how race, gender, sexuality, class, geographic location, and ability
          shape influencer cultures and economies. The course aims to identify
          the cultural, historical, economic, and political contexts from which
          influencers emerge and apply this critical knowledge to the digital
          media we engage with daily.
        </p>
      </>
    ),
    id: 'influencers-and-content-creator-cultures',
    samplePresentations: [
      {
        title: 'Relational Labour, Reciprocity and Revenue',
        url: 'https://www.canva.com/design/DAFYnSinUf0/PATpt-AycsEdGxTs-EKE_w/view',
      },
    ],
    studentReview: {
      authorAndCourse: 'Student letter of support, COMS 401 W2023',
      quote: (
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
      ),
    },
    title: 'Influencers and content creator cultures',
  },
  {
    description: (
      <>
        This course emphasizes major critical approaches in communication and
        media studies with the intent of introducing students to the theoretical
        foundations of media and mass communication-related research. The course
        explores the contexts in which these theories arose, identifies their
        major strengths and weaknesses, and provides an appreciation of how
        critical theory engages the social world through research on
        communication and media. Areas to be covered include the culture
        industry, political economy of the media, cultural studies, feminist
        media studies, and critical race theory.
      </>
    ),
    id: 'critical-media-studies',
    samplePresentations: [
      {
        title: 'Queer Media Studies',
        url: 'https://www.canva.com/design/DAFHdOoEPRk/qhbz-jvEgd2KXlrmR5AELA/edit',
      },
    ],
    studentReview: {
      authorAndCourse: 'Natsach (COMS 371, S2022)',
      quote: (
        <>
          Alora{' '}
          <strong>
            promotes student interaction and encourages critical thinking on
            challenging topics
          </strong>
          . While she retains her authority in the classroom, the environment is
          still interactive. Alora, being well-versed in a lot of topics,
          encourages the class to take little steps toward grasping a concept.{' '}
          <strong>
            She also facilitated my learning by making the educational process
            easier. This, by no means, lowered the educational standard;
            instead, the learning process was made to be engaging
          </strong>
          , which increased my understanding.
        </>
      ),
    },
    title: 'Critical media studies',
  },
];

export const STUDENT_REVIEWS: StudentReviewType[] = [
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

export const tocItems: TOCItem[] = [
  {
    id: 'teaching-philosophy',
    level: 1,
    title: 'Teaching Philosophy',
  },
  {
    id: 'courses',
    items: [
      {
        id: 'popular-culture',
        level: 2,
        new: true,
        title: 'Popular culture',
      },
      {
        id: 'computer-mediated-communications',
        level: 2,
        title: 'Computer-mediated communication',
      },
      {
        id: 'influencers-and-content-creator-cultures',
        level: 2,
        title: 'Influencers and content creator cultures',
      },
      {
        id: 'critical-media-studies',
        level: 2,
        title: 'Critical media studies',
      },
    ],
    level: 1,
    title: 'Courses',
  },
  {
    id: 'other',
    items: [
      {
        id: 'teaching-assistantships',
        level: 2,
        title: 'Teaching assistantships',
      },
      {
        id: 'student-feedback',
        level: 2,
        title: 'Student feedback',
      },
    ],
    level: 1,
    title: 'Other',
  },
  {
    id: 'references',
    level: 1,
    title: 'References',
  },
];
