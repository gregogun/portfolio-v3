import NextLink from 'next/link';
import { getAllPosts } from '@/lib/mdx';
import Container from '@/components/container';

export default function Posts({ posts }) {
  return (
    <Container>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <NextLink href={`blog/${post.slug}`}>
              {post.frontmatter.title}
            </NextLink>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts }
  };
};
