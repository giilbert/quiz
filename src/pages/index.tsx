import QuizCard from '@components/QuizCard';

function IndexPage() {
  return (
    <div>
      <h1>Quiz</h1>

      <div>
        <QuizCard
          id="test123"
          name="idk"
          author="author name"
          description="testing lol"
        />
      </div>
    </div>
  );
}

export default IndexPage;
