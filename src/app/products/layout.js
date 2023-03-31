import React from "react";

const ProductsLayout = ({ children }) => {
  return (
    <div className="layout">
      <h1>Products layout</h1>
      <div>{children}</div>
    </div>
  );
};

export default ProductsLayout;
