export type Frontmatter = {
  title: string;
  description: string;
  publishedAt: Date | string;
  updatedAt?: Date | string;
};

export type Post = {
  frontmatter: Frontmatter;
  code?: any;
  slug?: any;
};
