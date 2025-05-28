import React from "react";
import CommonCard from "./CommonCard";

const CommonSection = () => {
  return (
    <section className="w-full py-10 mt-5 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center w-full max-w-lg relative">
            <div className="flex-1 h-px bg-gray-300 relative">
              <div className="absolute -right-1 border-t-[6px] border-l-[6px] border-transparent border-t-gray-300" />
            </div>
            <h2 className="px-4 text-xl md:text-4xl font-extrabold text-[#4b4b4b] whitespace-nowrap">
              Travel Guides
            </h2>
            <div className="flex-1 h-px bg-gray-300 relative">
              <div className="absolute -left-1 border-t-[6px] border-r-[6px] border-transparent border-t-gray-300" />
            </div>
          </div>
          <p className="text-center capitalize mt-2 text-gray-600">
            Popular travel blogs & guides
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
        </div>
      </div>
    </section>
  );
};

export default CommonSection;
