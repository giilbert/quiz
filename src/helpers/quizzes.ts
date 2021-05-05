import testQuiz from './testQuiz';

// this file contains type definition for a quiz
// also contains all the quizzes

interface Quiz {
  /**
   * Metadata of the quiz
   */
  manifest: QuizManifest;

  questions: Question[];
}

interface QuizManifest {
  id: string;
  name: string;
  description: string;
  author: string;
}

interface Question {
  /**
   * The text component of the question
   */
  content: string;
  choices: Choice[];
  /**
   * how many points this question will have
   */
  points: number;
}

// question choice
interface Choice {
  content: string;
  correct: boolean;
}

const all: Quiz[] = [
  testQuiz,
  testQuiz,
  testQuiz,
  testQuiz,
  testQuiz,
  testQuiz,
  testQuiz,
  testQuiz,
];

// gets data about quiz without answers
function getQuiz(id: string): Quiz {
  const found = { ...all.find((v) => v.manifest.id === id) };
  found.questions.forEach((question) => {
    question.choices.forEach((choice) => {
      delete choice['correct'];
    });
  });

  return found;
}

export { all, getQuiz };
export type { Quiz, QuizManifest, Question, Choice };
