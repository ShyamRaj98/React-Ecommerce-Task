import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Quantity from "./Quantity";
const MiniCart = ({ cartItems, removeProduct, closeMiniCart, miniCard, updateQty }) => {
  return (
    <div className={`mini-cart bg-white transition-all duration-500 ease-in fixed top-0 bottom-0 right-0  ${miniCard ? "w-full md:w-2/5" : "w-0"} h-screen z-20`}>
      <div className={`transition-opacity duration-300 linear ${miniCard ? "delay-500 opacity-100" : "opacity-0"}`}>
        <div className="px-3 py-4 flex flex-row items-center justify-between">
          <h2 className="text-lg font-semibold">Cart Items</h2>
          <button className="bg-purple-50 hover:bg-purple-100 text-lg font-semibold text-gray-900 p-2" onClick={closeMiniCart}><IoMdClose /></button>
        </div>
        <div>
          {cartItems.length === 0 ? (
            <p className="font-semibold text-center p-5">Your cart is empty</p>
          ) : (
            <ul className="h-[90vh] px-2 flex flex-col gap-3 overflow-y-scroll">
              {cartItems.map((item) => (
                <li key={item.id} className="p-1 bg-purple-50 max-h-[140px] flex flex-row items-center justify-center gap-4 rounded-lg">
                  <img className="w-1/5 h-full object-contain overflow-hidden" src={item.image} alt={item.title} />
                  <div className="w-4/5 flex flex-row items-center justify-between">
                    <div className="">
                      <h4 className="product-title text-md font-semibold leading-5 mb-2">{item.title}</h4>
                      <p className="text-lg font-semibold">${item.price.toFixed(2)}</p>
                      <Quantity updateQty={updateQty} item={item} />
                    </div>
                    <button className="text-red-400 text-2xl p-2" onClick={() => removeProduct(item.id)}><MdDeleteOutline /></button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
