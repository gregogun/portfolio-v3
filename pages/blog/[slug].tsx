import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '@/lib/mdx';
import BlogContainer from '@/components/blogContainer';
import { useMemo } from 'react';

const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <BlogContainer frontmatter={frontmatter}>
      <Component />
    </BlogContainer>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post }
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false
  };
};

export default Post;
