import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card bg-purple-100 h-auto max-w-full rounded-xl">
      <div className="product-top bg-purple-100 hover:bg-purple-200 p-4 relative h-[200px] sm:h-[250px] md:h-[300px] rounded-t-xl">
        <img className="product-img w-80 md:w-70 h-full object-contain m-auto" src={product.image} alt={product.title} />
      </div>
      <div className="product-content h-fit px-3 py-4 mt-auto">
        <h5 className="text-gray-400 text-xs md:text-sm uppercase font-semibold">{product.category}</h5>
        <h3 className='product-title text-sm md:text-sm lg:text-md font-medium min-h-7 md:min-h-8 lg:min-h-11'>{product.title}</h3>
        <p className='product-price text-md md:text-lg font-medium'>${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;