import React from "react";
import BlogPostList from "../components/BlogPostList"; // Adjust the import path if necessary

const HomePage = () => {
  return (
    <main className="grow">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <BlogPostList />
      </div>
    </main>
  );
};

export default HomePage;
