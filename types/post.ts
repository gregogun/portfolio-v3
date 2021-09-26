export type Frontmatter = {
  title: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
  slug?: any;
};

export type Post = {
  frontmatter: Frontmatter;
  code?: any;
  slug?: any;
};
