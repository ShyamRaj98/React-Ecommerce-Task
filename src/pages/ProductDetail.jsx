import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS_ENDPOINT, REST_HOST_NAME } from "../components/API";

function ProductDetail({ addToCart, cart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  console.log(id)
  useEffect(() => {
    fetch(`${REST_HOST_NAME}/${PRODUCTS_ENDPOINT}/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const findCart = cart.find((item) => item.id === product.id);

  return (
    <div className="pt-[100px] container mx-auto">
      <div className="p-3 h-[60vh] flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 pb-20">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold mb-3">{product.title}</h2>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-3">${product.price.toFixed(2)}</p>
          <p className="text-md font-semibold mb-3">{product.description}</p>
          <button className="bg-black hover:bg-purple-600 text-white w-full text-2xl font-semibold px-4 py-2" onClick={() => addToCart(product)}>
            {findCart ? "Add More Quantity" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
