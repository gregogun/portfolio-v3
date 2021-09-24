import NextLink from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import Container from '@/components/container';
import { link } from '@/styles/link';
import { text } from '@/styles/text';
import { list } from '@/styles/list';
import { styled } from 'stitches.config';
import { flex } from '@/styles/utils/flex';
import { useRef } from 'react';

const HDivider = styled('hr', {
  border: 0,
  borderBottom: '1px dashed var(--colors-accent)',
  background: '$tertiary',
  mb: '$4',
});

const VDivider = styled('hr', {
  border: 0,
  backgroundColor: '$accent',
  width: '0.125rem',
  height: '5rem',
});

export default function Posts({ posts }) {
  const linkRef = useRef(null);

  const fireClickEvent = () => {
    linkRef.current.click();
  };

  return (
    <Container>
      <h1
        className={text({
          css: {
            '@bp3': {
              size: '4xl',
            },
            fontFamily: '$heading',
            mb: '$1',
          },
          size: '3xl',
          weight: 'semibold',
        })}
      >
        Blog
      </h1>
      <p
        className={text({
          css: {
            mb: '$1.5',
          },
          size: 'lg',
        })}
      >
        Welcome to my digital garden. Here you can find my thoughts and findings
        in web development, design and beyond.
      </p>
      <HDivider />
      <ul className={list()}>
        {posts.map((post, index) => (
          /* eslint-disable */
          <li
            onClick={fireClickEvent}
            className={flex({
              css: {
                cursor: 'pointer',
                p: '$0.25',
                borderRadius: '$md',
                '&:focus-within': {
                  boxShadow: '0 0 0 0.125rem #7B61FF',
                },
              },
            })}
            key={index}
          >
            <p
              className={text({
                css: { color: '$tertiary', mb: '$1' },
                size: 'sm',
              })}
            >
              {post.frontmatter.publishedAt}
            </p>
            <VDivider />
            <div>
              <h2
                className={text({
                  css: { mb: '$1' },
                })}
              >
                <NextLink href={`/blog/${post.slug}`}>
                  <a
                    ref={linkRef}
                    className={link({
                      css: {
                        fontSize: '32px',
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
                  css: { color: '$tertiary', mb: '$0.5' },
                })}
              >
                {post.frontmatter.description}
              </p>
            </div>
          </li>
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
