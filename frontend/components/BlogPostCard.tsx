import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types";

const BlogPostCard: React.FC<{ post: Post }> = ({ post }) => {
  const imageUrl = post.coverImage
    ? `${post.coverImage.url}`
    : "/placeholder.jpg";

  return (
    <div className="bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-md overflow-hidden flex flex-col">
      {/* Cover Image */}
      {imageUrl && (
        <Link href={`/blog/${post.slug}`} className="group">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-4 left-4 z-10 inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-[10px] font-semibold px-2 py-[0.2rem] rounded-full">
              {post?.category?.Category}
            </span>
          </div>
        </Link>
      )}

      {/* Content */}
      <div className="p-4 grow flex flex-col">
        <time className="text-xs mb-2 text-gray-500 dark:text-gray-400">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h2 className="text-lg font-semibold mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>
        <div className="grow">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {post.excerpt}
          </p>
        </div>
        {/* Read More Link */}
        <div className="mt-3">
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-600 text-sm hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
