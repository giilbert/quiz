import Link from 'next/link';
import styles from '@scss/QuizCard.module.scss';
import { QuizManifest } from '@helpers/quizzes';

function QuizCard({ id, name, author, description }: QuizManifest) {
  return (
    <Link href={`/quiz/${id}`}>
      <div className={styles.container}>
        <h3>{name}</h3>
        <span className={styles.author}>by {author}</span>
        <hr />

        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}

export default QuizCard;
