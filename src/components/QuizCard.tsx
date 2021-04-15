import Link from 'next/link';
import styles from '@scss/QuizCard.module.scss';

interface Props {
  id: string;
  name: string;
  author: string;
  description: string;
}

function QuizCard({ id, name, author, description }: Props) {
  return (
    <Link href={`/quiz/${id}`}>
      <div className={styles.container}>
        <div className={styles['play-button']}>
          <img src="/icons/start.svg" />
        </div>
        <div className={styles.side}>
          <h1>
            {name}
            <span className={styles.author}>by {author}</span>
          </h1>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default QuizCard;
