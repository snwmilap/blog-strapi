"use client";

import React, { useEffect, useState } from "react";
import { Post } from "@/types";
import BlogPostCard from "./BlogPostCard";
import HeroSection from "./HeroSection";
import HeroSectionSkeleton from "./HeroSectionSkeleton";
import BlogPostSkeleton from "./BlogPostSkeleton";

const POSTS_PER_PAGE = 6; // Number of posts per page

const BlogPostList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1); // Current page
  const [totalPages, setTotalPages] = useState<number>(1); // Total number of pages
  const [featuredPost, setFeaturedPost] = useState<Post | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]); // All loaded posts
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false); // Loading state for load more button

  // Fetch posts on initial load
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
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

        // Set initial posts and total pages
        if (page === 1) {
          setAllPosts(data); // Set all posts when loading the first page
        } else {
          setAllPosts((prevPosts) => [...prevPosts, ...data]); // Append new posts to the already loaded posts
        }

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
  }, [page]); // Fetch posts when `page` changes

  // Load more posts
  const loadMorePosts = async () => {
    setIsLoadingMore(true); // Set loading state for more posts
    setPage((prevPage) => prevPage + 1); // Increment the page to load next set of posts
    setIsLoadingMore(false); // Reset loading state
  };

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto">
      {loading ? (
        <>
          <HeroSectionSkeleton /> {/* Skeleton for Hero Section */}
          <ul className="grid grid-cols-3 gap-5">
            {Array.from({ length: POSTS_PER_PAGE }).map((_, index) => (
              <BlogPostSkeleton key={index} />
            ))}
          </ul>
        </>
      ) : allPosts && allPosts.length > 0 ? (
        <>
          {featuredPost && <HeroSection post={featuredPost} />}
          <ul className="grid grid-cols-3 gap-5">
            {allPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </ul>

          {/* Load More Button */}
          {page < totalPages && (
            <button
              onClick={loadMorePosts}
              className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
              disabled={isLoadingMore} // Disable the button while loading more posts
            >
              {isLoadingMore ? "Loading..." : "Load More"}
            </button>
          )}
        </>
      ) : (
        <div className="text-center text-gray-500">
          No blog posts available.
        </div>
      )}
    </div>
  );
};

export default BlogPostList;
