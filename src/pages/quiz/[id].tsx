import { GetServerSideProps } from 'next';
import { getQuiz, Quiz } from '@helpers/quizzes';

interface PageProps {
  quiz: Quiz;
}

function QuizPage(props: PageProps) {
  console.log(props);
  return (
    <div>
      <h1>{props.quiz.manifest.name}</h1>
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
