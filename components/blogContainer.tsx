import { link } from '@/styles/link';
import { text } from '@/styles/text';
import { css, styled } from 'stitches.config';
import Container from './container';

const Article = styled('article', {
  mb: '32px'
});

const line = css({
  mb: '32px',
  border: 0,
  height: '2px',
  backgroundImage: 'linear-gradient(to right, $primary, $accent, $primary)'
});

export default function BlogContainer({ children, frontmatter }) {
  return (
    <Container
      title={`${frontmatter.title} - Greg Ogun`}
      // description={frontmatter.summary}
      // date={new Date(frontmatter.publishedAt).toISOString()}
      type="article"
    >
      <Article>
        <h1
          className={text({
            css: {
              '@bp3': {
                size: '4xl'
              },
              fontFamily: '$heading',
              marginBottom: '8px'
            },
            size: '3xl',
            weight: 'semibold'
          })}
        >
          {frontmatter.title}
        </h1>
        {children}
      </Article>
      <hr className={line()} />
      <a
        className={link()}
        href={`https://github.com/gregogun/portfolio/v3/edit/main/data/blog/${frontmatter.slug}.mdx`}
      >
        Edit this page on Github &rarr;
      </a>
    </Container>
  );
}
