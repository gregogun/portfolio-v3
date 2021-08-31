import { text } from '@/styles/text';
import Container from './container';

export default function BlogContainer({ children, frontmatter }) {
  return (
    <Container
      title={`${frontmatter.title} - Greg Ogun`}
      // description={frontmatter.summary}
      // date={new Date(frontmatter.publishedAt).toISOString()}
      type="article"
    >
      <article>
        <h1
          className={text({
            css: {
              '@bp3': {
                size: '4xl'
              },
              fontFamily: '$heading',
              marginBottom: '32px'
            },
            size: '3xl',
            weight: 'semibold'
          })}
        >
          {frontmatter.title}
        </h1>
        {children}
      </article>
    </Container>
  );
}
