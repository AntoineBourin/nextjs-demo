"use client";

const ProductsError = ({ reset }) => {
  return (
    <div className="error">
      <p>Oups</p>
      <button onClick={() => reset()}>Réessayer</button>
    </div>
  );
};

export default ProductsError;
