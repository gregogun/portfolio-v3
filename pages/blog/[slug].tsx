import { getMDXComponent } from 'mdx-bundler/client';
import { getAllPosts, getSinglePost } from '@/lib/mdx';
import BlogContainer from '@/components/blogContainer';
import { ImageRounded } from '@/components/image';
import { useMemo } from 'react';
import { text } from '@/styles/text';

export default function Post({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogContainer frontmatter={frontmatter}>
      <Component
        components={{
          p: (props) => (
            <p
              {...props}
              className={text({
                css: {
                  mt: '$7',
                },
              })}
            />
          ),
          li: (props) => (
            <li
              {...props}
              className={text({
                css: {
                  mt: '$4',
                },
              })}
            />
          ),
          ul: (props) => (
            <ul
              {...props}
              className={text({
                css: {
                  mt: '$7',
                },
              })}
            />
          ),
          ImageRounded,
        }}
      />
    </BlogContainer>
  );
}

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
