import Image from "next/image";
import React from "react";
import b1 from "../../../../public/webImages/b1.jpg";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";

const BlogListCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-md shadow hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Blog Image */}
      <div className="relative w-full h-52 md:h-64">
        <Image src={b1} alt="blog_image" fill className="object-cover" />
      </div>

      {/* Blog Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 text-xs text-[#f35555] font-medium">
          <span>Tag One</span>
          <span>Tag Two</span>
          <span>Tag Three</span>
        </div>

        {/* Title */}
        <Link href={"blog/slug"}>
          <h2 className="text-[#494949] font-semibold text-lg md:text-xl leading-snug hover:underline overflow-hidden text-ellipsis">
            Blog Post Title Goes Here
          </h2>
        </Link>

        {/* Divider */}
        <hr className="w-20 border-t-2 border-[#fe0000]" />

        {/* Summary */}
        <p className="text-sm text-[#494949] text-justify line-clamp-3">
          Trunyan Hill is an underrated hike in Bali with amazing views of Mount
          Abang and the Batur caldera. This guide will explain all about how to
          do the hike and what to expect!
        </p>

        {/* Read More */}
        <Link
          href={"blog/slug"}
          className="mt-3 flex items-center cursor-pointer rounded-md gap-1 w-fit px-4 py-2 bg-[#f35555] text-white uppercase text-sm hover:bg-[#fe0000] transition-all"
        >
          Read More <FaAnglesRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogListCard;
