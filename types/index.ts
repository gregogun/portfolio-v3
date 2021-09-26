import * as React from 'react';

/* Types for blog related components */
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

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
}
