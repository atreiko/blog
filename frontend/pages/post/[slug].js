import Head from 'next/head';
import format from 'date-fns/format';
import { Article, Content, Title } from '@/components';
import { client } from '@/lib/client';
import styles from './index.module.scss';

export default function Post({ post }) {
  const { title, publishedDate, body } = post;

  const date = format(new Date(publishedDate), 'dd MMM yyyy');

  return (
    <Article className={styles.post} backUrl='/'>
      <Head>
        <title>{post.meta_title}</title>
      </Head>
      <Title className={styles.postTitle}>{title}</Title>
      <p className={styles.postDate}>{date}</p>
      <Content body={body} />
    </Article>
  );
}

export async function getStaticPaths() {
  const query = `*[type == "post"] {
    slug {
      current
    }
  }`;

  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

  const post = await client.fetch(query);

  return {
    props: {
      post,
    },
  };
}
