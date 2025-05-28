import React from "react";
import section_about from "../../../public/webImages/section_about.jpg";
import Image from "next/image";

const AboutCard = () => {
  return (
    <section className="w-full relative py-10 mt-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row gap-8 items-center md:px-32">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={section_about}
            alt="About Section"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="capitalize font-bold text-2xl md:text-4xl text-[#4b4b4b] mb-4">
            Thanks for visiting!
          </h2>

          <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
            Welcome to <strong>blogger.zieara.com</strong> – your space for
            curated stories, insightful travel destinations, and personal
            reflections from the world of tech and beyond.
            <br />
            <br />
            I'm <strong>Viraj</strong>, currently working as a Software Engineer
            in Dubai, and this blog is a reflection of my passion for
            creativity, technology, and storytelling. Whether you're here to
            explore places, get inspired, or just take a break from your busy
            routine — I’m glad you stopped by.
            <br />
            <br />
            This platform is where I share my thoughts, experiences, and useful
            resources that I hope will inform, inspire, or simply entertain you.
            Every post is crafted with care and a deep interest in delivering
            real value to fellow readers, travelers, and tech enthusiasts.
            <br />
            <br />
            Feel free to explore, connect, and come back for more!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
