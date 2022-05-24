import { getAllPosts } from '../../script/api';
import Head from 'next/head';
import Link from 'next/link';
import Post from '../../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <section>
        <h2>{heroPost.title}</h2>
      </section>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={{
                pathname: '/posts/[slug]',
                query: { slug: post.slug   },
              }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
