import React from "react";

export const generateMetadata = async ({ params: { id } }, parent) => {
  const parentMetadata = await parent;
  const category = await fetch(
    `http://localhost:3000/api/categories/${id}`
  ).then((res) => res.json());

  return {
    title: category.name,
    description: `Bienvenue sur la catégorie ${category.name}. ${parentMetadata.description}`,
  };
};

const CategoryPage = async ({ params: { id } }) => {
  const category = await fetch(
    `http://localhost:3000/api/categories/${id}`
  ).then((res) => res.json());
  return (
    <div>
      <h1>{category.name}</h1>
    </div>
  );
};

export default CategoryPage;
