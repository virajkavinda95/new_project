import Image from "next/image";
import React from "react";
import catOne from "../../../../public/webImages/category-1.png";
import catTwo from "../../../../public/webImages/category-2.png";
import catThree from "../../../../public/webImages/category-3.png";
import catFour from "../../../../public/webImages/category-4.png";

const CategoryCard = () => {
  return (
    <div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative w-full h-[200px] md:h-[350px] overflow-hidden rounded-xl shadow-md group"
    >
      <Image
        src={catOne}
        alt="Category"
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 w-full py-2">
        <h2 className="text-white uppercase font-bold text-center text-sm md:text-[2.5rem]">
          Travel
        </h2>
      </div>
    </div>
  );
};

export default CategoryCard;
