import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';

export const POSTS_PATH = path.join(process.cwd(), 'data/posts');

export const getSourceOfFile = (fileName) => {
  // if errors, try removing toSting and changing to a js file till fix
  return fs.readFileSync(path.join(POSTS_PATH, fileName)).toString();
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, '');
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug
      };
    });
};

export const getSinglePost = async (slug) => {
  const source = getSourceOfFile(slug + '.mdx');

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: POSTS_PATH
  });

  return {
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      slug: slug || null,
      ...frontmatter
    },
    code
  };
};
