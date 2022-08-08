import { getAllPosts } from '../../script/api';
import Head from 'next/head';
import Link from 'next/link';
import Post from '../../types/post';

type Props = {
  allPosts: Post[];
};

const About = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <section>
        <h2>{heroPost.title}</h2>
      </section>
    </>
  );
};

export default About;

export const getStaticProps = async () => {

  return {
    props: { },
  };
};
