"use client";

import React, { useEffect, useState } from "react";
import { Post } from "@/types";
import BlogPostCard from "./BlogPostCard";
import { Pagination } from "./Pagination";
import HeroSection from "./HeroSection";

const POSTS_PER_PAGE = 6; // Change this to adjust the number of posts per page

const BlogPostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${POSTS_PER_PAGE}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { data, meta } = await response.json();

        const featured = data.find((post: Post) => post.featured === true);
        setFeaturedPost(featured || null);

        setPosts(data);
        setTotalPages(meta.pagination.pageCount);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]); // Re-fetch posts when `page` changes

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-gray-500">No blog posts available.</div>
    );
  }

  return (
    <div className="container mx-auto">
      {featuredPost && <HeroSection post={featuredPost} />}

      <ul className="grid grid-cols-3 gap-5">
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default BlogPostList;
