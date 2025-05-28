import React from "react";
import BlogListCard from "./BlogListCard";

const BlogList = () => {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-[#4b4b4b] mb-10">
          All Blogs
        </h2>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <BlogListCard />
          <BlogListCard />
          <BlogListCard />
          <BlogListCard />

          {/* set 2 */}
          <BlogListCard />
          <BlogListCard />
          <BlogListCard />
          <BlogListCard />
        </div>
      </div>
    </section>
  );
};

export default BlogList;
