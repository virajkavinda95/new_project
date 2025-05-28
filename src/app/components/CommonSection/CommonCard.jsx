import React from "react";
import b1 from "../../../../public/webImages/b1.jpg";
import Image from "next/image";

const CommonCard = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="relative w-full h-48 md:h-56 rounded-sm overflow-hidden">
        <Image
          src={b1}
          alt="b1"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <h3 className="text-center text-[#4b4b4b] font-semibold mt-3 text-base md:text-lg">
        Blog Header 1
      </h3>
    </div>
  );
};

export default CommonCard;
