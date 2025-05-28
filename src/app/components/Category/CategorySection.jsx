"use client";

import CategoryCard from "./CategoryCard"; // adjust path as needed

const CategorySection = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center w-full max-w-lg">
            <div className="flex-1 h-px bg-gray-300 relative before:absolute before:-right-1 before:border-t-[6px] before:border-l-[6px] before:border-transparent before:border-t-gray-300"></div>
            <h2 className="px-4 text-xl md:text-4xl font-extrabold text-[#4b4b4b] whitespace-nowrap">
              Categories
            </h2>
            <div className="flex-1 h-px bg-gray-300 relative after:absolute after:-left-1 after:border-t-[6px] after:border-r-[6px] after:border-transparent after:border-t-gray-300"></div>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
