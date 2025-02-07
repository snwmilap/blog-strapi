import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  post: Post | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ post }) => {
  if (!post) return null; // Hide section if no featured post
  const imageUrl = post.coverImage
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.coverImage.url}`
    : "/placeholder.jpg";
  return (
    <section className="mb-16">
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        <Image
          src={imageUrl || "https://placehold.co/1200x1000/png"}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Post</h1>
          <p className="text-xl mb-6 max-w-2xl">{post.title}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="bg-zinc-700 px-6 py-2 rounded-md text-white"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
