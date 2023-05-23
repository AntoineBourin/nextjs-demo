import React from "react";

const Categories = async () => {
  const response = await fetch(
    "https://app-dir.vercel.app/api/categories?delay=5000",
    { cache: "no-store" }
  );
  const categories = await response.json();
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
