import layout from '@scss/layout.module.scss';
import QuizCard from '@components/QuizCard';

function IndexPage() {
  return (
    <div className={layout.center}>
      <main>
        <h1>Quiz</h1>

        <div>
          <QuizCard
            id="test123"
            name="idk"
            author="author name"
            description="testing lol"
          />
        </div>
      </main>
    </div>
  );
}

export default IndexPage;
