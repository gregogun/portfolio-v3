import { link } from '@/styles/link';
import { text } from '@/styles/text';
import { flex } from '@/styles/utils/flex';
import { css, styled } from 'stitches.config';
import Container from './container';
import Image from 'next/image';
import NextLink from 'next/link';
import type { Frontmatter } from 'types/post';
import { parseISO, format } from 'date-fns';

const rounded = css({
  borderRadius: '$full',
});

const Article = styled('article', {
  mb: '32px',
});

const line = css({
  mb: '32px',
  border: 0,
  height: '2px',
  backgroundImage: 'linear-gradient(to right, $primary, $accent, $primary)',
});

type BlogContainerProps = {
  frontmatter: Frontmatter;
  children: JSX.Element;
};

export default function BlogContainer({
  children,
  frontmatter,
}: BlogContainerProps) {
  return (
    <Container
      title={`${frontmatter.title} - Greg Ogun`}
      description={frontmatter.description}
      date={new Date(frontmatter.publishedAt).toISOString()}
      type="article"
    >
      <Article>
        <h1
          className={text({
            css: {
              '@bp3': {
                size: '4xl',
              },
              fontFamily: '$heading',
              mb: '$4',
            },
            size: '3xl',
            weight: 'semibold',
          })}
        >
          {frontmatter.title}
        </h1>
        <div className={flex({ css: { mb: '$4' } })}>
          <Image
            width={24}
            height={24}
            src="/static/images/me/profile.jpg"
            alt="Greg Ogun"
            className={rounded()}
          />
          <p
            className={text({
              size: 'sm',
              css: {
                ml: '$2',
                color: '$tertiary',
              },
            })}
          >
            Greg Ogun - {''}
            {format(
              parseISO(frontmatter.publishedAt.toISOString()),
              'MMMM dd, yyyy'
            )}
          </p>
        </div>
        {children}
      </Article>
      <hr className={line()} />
      <div
        className={flex({
          spaced: 'true',
        })}
      >
        {' '}
        <NextLink href="/blog" passHref>
          <a className={link()}>&larr; All posts</a>
        </NextLink>
        <a
          className={link()}
          href={`https://github.com/gregogun/portfolio/v3/edit/main/data/blog/${frontmatter.slug}.mdx`}
        >
          Edit this page on Github &rarr;
        </a>
      </div>
    </Container>
  );
}
