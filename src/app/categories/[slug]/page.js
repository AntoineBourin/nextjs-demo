import React from "react";

export const generateStaticParams = async () => {
  const response = await fetch("https://app-dir.vercel.app/api/categories");
  const categories = await response.json();
  return categories.map((category) => ({ slug: category.slug }));
};

const CategoryPageBySlug = async ({ params }) => {
  const response = await fetch(
    `https://app-dir.vercel.app/api/categories?slug=${params.slug}&delay=2000`
  );
  const category = await response.json();
  return (
    <div>
      <h1>
        Welcome to page {category.name} ({category.count})
      </h1>
    </div>
  );
};

export default CategoryPageBySlug;
