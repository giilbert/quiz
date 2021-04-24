import { useState, useEffect } from 'react';
import layout from '@scss/layout.module.scss';
import QuizCard from '@components/QuizCard';
import { QuizManifest } from '@helpers/quizzes';

function IndexPage() {
  const [quizzes, setQuizzes] = useState<QuizManifest[]>(null);

  useEffect(() => {
    fetch('/api/quizzes/list').then(async (res) => {
      const json = await res.json();
      setQuizzes(json);
    });
  }, []);
  return (
    <div className={layout.center}>
      <main>
        <h1>Quiz</h1>

        <div>{quizzes ? quizzes.map(QuizCard) : <p>loading</p>}</div>
      </main>
    </div>
  );
}

export default IndexPage;
