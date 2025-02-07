// types.ts

// Define the Post interface
export interface Post {
  id: number; // or string, depending on your API
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  featured: boolean;
  category: {
    Category: string;
  };
}

// types/blog.ts
export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: {
    url: string;
  };
}
