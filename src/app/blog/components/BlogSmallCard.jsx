import Image from "next/image";
import React from "react";
import b1 from "../../../../public/webImages/b1.jpg";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";

const BlogSmallCard = () => {
  return (
    <div className="flex flex-col bg-white transition-all overflow-hidden">
      <div className="relative w-full h-40">
        <Image src={b1} alt="blog_image" fill className="object-contain" />
      </div>
      <div className="p-3">
        <Link href="#">
          <h3 className="text-sm text-left font-semibold text-[#4b4b4b] hover:underline line-clamp-2">
            Small Blog Title Goes Here
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default BlogSmallCard;
