import Link from 'next/link';
import Image from 'next/image';
import cl from 'classnames';
import { Title } from '@/components';
import { urlFor } from '../../lib/client';
import styles from './index.module.scss';

const Post = ({ className, title, slug, description, image }) => {
  // console.log(urlFor(image).url());
  return (
    <Link className={cl(className, styles.post)} href={`/post/${encodeURIComponent(slug.current)}`}>
      <a className={styles.postLink}>
        <Title className={styles.postTitle} type='small'>
          {title}
        </Title>
        <div className={styles.postContent}>
          <div>
            <Image src={urlFor(image).url()} alt={image.caption} width='100' height='100' />
          </div>
          <p className={styles.postDescription}>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Post;
