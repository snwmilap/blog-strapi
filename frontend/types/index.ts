export interface Post {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  featured: boolean;
  publishedAt: string;
  updatedAt: string;
  author?: {
    name: string;
    picture?: {
      url: string;
    };
  };
  coverImage?: {
    url: string;
    alternativeText?: string;
  };
}