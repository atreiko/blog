import Link from 'next/link';
import cl from 'classnames';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import styles from './index.module.scss';

export default function Article({ className, backUrl, children }) {
  return (
    <article className={cl(className, styles.article)}>
      <Link href={backUrl}>
        <a className={styles.articleBack}>
          <AiOutlineArrowLeft />
        </a>
      </Link>
      <div className={styles.articleContent}>
        {children}
      </div>
    </article>
  );
}
 