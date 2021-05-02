import { GetServerSideProps } from 'next';
import { getQuiz, Quiz } from '@helpers/quizzes';

import styles from '@scss/quizPage.module.scss';

interface PageProps {
  quiz: Quiz;
}

function QuizPage({ quiz }: PageProps) {
  return (
    <div className="d-flex justify-content-center">
      <main className={styles.main}>
        <h1>{quiz.manifest.name}</h1>

        <p>{quiz.manifest.description}</p>

        <hr />

        <button className="btn btn-primary">Start</button>
      </main>
    </div>
  );
}

const getServerSideProps: GetServerSideProps = async (ctx) => {
  const quiz = { ...getQuiz(ctx.query.id as string) };

  return {
    props: {
      quiz,
    },
  };
};

export { getServerSideProps };
export default QuizPage;
