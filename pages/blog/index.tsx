import NextLink from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import Container from '@/components/container';
import { link } from '@/styles/link';
import { text } from '@/styles/text';
import { list } from '@/styles/list';
import { styled } from 'stitches.config';
import { flex } from '@/styles/utils/flex';
import { useRef } from 'react';
import { Post } from 'types/post';

const HDivider = styled('hr', {
  border: 0,
  borderBottom: '1px dashed var(--colors-accent)',
  background: '$tertiary',
  mb: '$8',
});

const VDivider = styled('hr', {
  margin: 0,
  mx: '$6',
  border: 0,
  backgroundColor: '$accent',
  width: '0.125rem',
  height: '90%',
});

type PostProps = Post;

const BlogCard = ({ post }: { post: PostProps }) => {
  const linkRef = useRef(null);

  const fireClickEvent = () => {
    linkRef.current.click();
  };

  return (
    /* eslint-disable */
    <li
      onClick={fireClickEvent}
      className={flex({
        css: {
          height: '$6xl',
          cursor: 'pointer',
          p: '$1',
          borderRadius: '$md',
          '&:focus-within': {
            boxShadow: '0 0 0 0.125rem #7B61FF',
          },
        },
      })}
    >
      <p
        className={text({
          css: {
            '@bp1': {
              pt: '$3',
            },
            '@bp2': {
              pt: '$4',
            },
            color: '$tertiary',
            mb: '$1',
            alignSelf: 'start',
          },
          size: 'sm',
        })}
      >
        {post.frontmatter.publishedAt.toString().replace('-', '/').slice(0, 5)}
      </p>
      <VDivider />
      <div>
        <h2
          className={text({
            css: {
              mb: '$2',
            },
          })}
        >
          <NextLink href={`/blog/${post.slug}`}>
            <a
              ref={linkRef}
              className={link({
                css: {
                  '@bp1': {
                    fontSize: '1.5rem',
                  },
                  '@bp3': {
                    fontSize: '2rem',
                  },
                  outline: 0,
                },
                type: 'noLine',
              })}
            >
              {post.frontmatter.title}
            </a>
          </NextLink>
        </h2>
        <p
          className={text({
            size: 'sm',
            css: { color: '$tertiary', mb: '$0.5' },
          })}
        >
          {post.frontmatter.description}
        </p>
      </div>
    </li>
  );
};

export default function Posts({ posts }) {
  return (
    <Container>
      <h1
        className={text({
          size: '3xl',
          css: {
            fontFamily: '$heading',
            mb: '$1',
          },
          weight: 'semibold',
        })}
      >
        Blog
      </h1>
      <p className={text()}>
        Welcome to my digital garden. Here you can find my thoughts and findings
        in web development, design and beyond.
      </p>
      <HDivider />
      <ul className={list()}>
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </ul>
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};
