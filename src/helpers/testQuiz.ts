import { Quiz } from './quizzes';

const testQuiz: Quiz = {
  manifest: {
    id: 'test123',
    name: '[insert name here]',
    description: '[insert description here]',
    author: '[insert author name here]',
  },

  questions: [
    {
      content: 'The answer is the second choice',
      choices: [
        {
          content: 'Wrong',
          correct: false,
        },
        {
          content: 'Wrong',
          correct: false,
        },
        {
          content: 'Correct',
          correct: true,
        },
        {
          content: 'Wrong',
          correct: false,
        },
      ],
      points: 5,
    },
  ],
};

export default testQuiz;
