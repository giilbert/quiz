import { NextApiResponse } from 'next';
import { all } from '@helpers/quizzes';

export default function handler(_, res: NextApiResponse) {
  res.json(all.map((v) => v.manifest));
}
