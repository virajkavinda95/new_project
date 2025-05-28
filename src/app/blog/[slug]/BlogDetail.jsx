import Image from "next/image";
import React from "react";
import b1 from "../../../../public/webImages/b1.jpg";
import BlogSmallCard from "../components/BlogSmallCard";
import Link from "next/link";
import SubmissionForm from "../../components/SubmissionForm";

const BlogDetail = () => {
  return (
    <section className="relative top-0 w-full py-10 my-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Main Content Area */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          {/* Featured Image with Title */}
          <div className="relative w-full h-64 md:h-[800px]">
            {/* Background Image */}
            <Image
              src={b1}
              alt="b1"
              fill
              className="object-cover w-auto h-auto rounded-md"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-md" />

            {/* Title */}
            <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-10 text-center z-10">
              <h1 className="font-extrabold text-white text-2xl md:text-4xl capitalize leading-tight mb-2">
                The quick brown fox jumps over the lazy dog
              </h1>
              <p className="text-white text-sm md:text-base max-w-3xl">
                The quick brown fox jumps over the lazy dog, The quick brown fox
                jumps over the lazy dog, The quick brown fox jumps over the lazy
                dog, The quick brown fox jumps over the lazy dog, The quick
                brown fox jumps over the lazy dog.
              </p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none">
            <p>
              {/* Dangerous HTML content or rich text goes here */}
              blog content going here....
            </p>
          </div>

          {/* You May Also Like */}
          <div>
            <h3 className="text-left text-xl md:text-2xl font-semibold uppercase text-[#4b4b4b] my-4">
              You may also like
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <BlogSmallCard />
              <BlogSmallCard />
              <BlogSmallCard />
              <BlogSmallCard />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4 flex mt-0 flex-col gap-6 md:my-0">
          <h3 className="uppercase text-left text-lg font-semibold text-[#4b4b4b]">
            Related Posts
          </h3>

          {/* Related Blog Card */}
          <div className="flex flex-row bg-white rounded-md shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
            {/* Blog Image */}
            <div className="relative w-full h-40">
              <Image src={b1} alt="blog_image" fill className="object-cover" />
            </div>

            {/* Blog Content */}
            <div className="p-4 flex flex-col gap-2">
              <Link href={"#"}>
                <h2 className="text-[#494949] font-semibold text-base md:text-lg leading-snug hover:underline line-clamp-2">
                  Blog Post Title Goes Here
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <SubmissionForm />
      </div>
    </section>
  );
};

export default BlogDetail;
