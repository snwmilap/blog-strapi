import RichTextRenderer from "@/components/RichTextRenderer";
import Image from "next/image";

interface PostPageProps {
  params: { slug: string };
}

const fetchBlogPost = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch post`);
  }

  const response = await res.json();
  return response.data.length > 0 ? response.data[0] : null;
};

export default async function PostPage({ params }: PostPageProps) {
  if (!params?.slug) {
    return <div className="text-red-500 text-center">Invalid post slug.</div>;
  }

  try {
    const post = await fetchBlogPost(params.slug);
    const imageUrl = post.coverImage
      ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${post.coverImage.url}`
      : "/placeholder.jpg";
    if (!post) {
      return (
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl text-red-600">Post not found</h1>
          <p>Unable to find post with slug: {params.slug}</p>
        </div>
      );
    }

    return (
      <main className="relative grow">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <article className="animate-fade-in">
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div>
                  <span className="inline-block mb-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[10px] font-semibold px-2 py-[0.2rem] rounded-full">
                    {post.category.Category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-2 text-white">
                  {post.title}
                </h1>
                <time className="text-xs mb-2 text-white/80">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none animate-slide-up">
              <RichTextRenderer content={post.content} />
            </div>

            {/* <div className="mt-8 flex justify-between items-center">
              <Button variant="outline" size="sm" asChild>
                <Link href="/">Back to Blog</Link>
              </Button>
              <Button variant="outline" size="sm">Share</Button>
            </div> */}
          </article>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl text-red-600">Error loading post</h1>
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }
}
