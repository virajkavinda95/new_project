import React from "react";
import bg from "../../../public/webImages/bg.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[50vh] md:h-[80vh]">
        <Image
          src={bg}
          alt="Banner Background"
          fill
          priority
          className="object-cover"
        />
        {/* Optional overlay or content here */}
      </div>
    </section>
  );
};

export default Banner;
