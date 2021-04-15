import { useRouter } from 'next/router';

function QuizPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>{query.id}</h1>
    </div>
  );
}

export default QuizPage;
