import useSWR from 'swr';
import QuizCard from '@components/QuizCard';
import { QuizManifest } from '@helpers/quizzes';

function IndexPage() {
  const { data: quizzes } = useSWR<QuizManifest[]>('/api/quizzes/list');

  return (
    <div className="d-flex justify-content-center">
      <main className="m-3" style={{ width: 600 }}>
        <h1>Quiz</h1>

        <div className="my-4">
          {quizzes ? quizzes.map(QuizCard) : <p>loading</p>}
        </div>
      </main>
    </div>
  );
}

export default IndexPage;
