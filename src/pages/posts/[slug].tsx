import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../../script/api';
import Head from 'next/head';
import { CMS_NAME } from '../../../script/constants';
import markdownToHtml from '../../../script/markdownToHtml';
import PostType from '../../../types/post';
import { useRemarkSync } from 'react-remark';

const ExampleComponent = () => {};

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const PostContent = ({ content }) => {
  const reactContent = useRemarkSync(content);

  return reactContent;
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return <PostContent content={post.content} />
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content'
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
