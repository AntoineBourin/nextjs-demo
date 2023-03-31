import React from "react";

const ProductsPage = async () => {
  const response = await fetch(
    "https://app-dir.vercel.app/api/categories?delay=5000",
    { cache: "no-cache" }
  );
  const categories = await response.json();
  return (
    <div className="page">
      <h2>Welcome to products page</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
