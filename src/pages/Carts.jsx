import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import Quantity from '../components/Quantity';

function Carts({ cartItems, removeProduct, updateQty }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;
  return (
    <div className='pt-[100px] pb-[50px] container mx-auto'>
      <div className="bg-gray-300 px-3 py-4 flex flex-row items-center justify-between">
        <h2 className="text-lg font-semibold">Cart Items</h2>
      </div>
      <div className='h-[90vh] p-3 flex flex-col md:flex-row gap-10'>
        <div className='flex-1'>
          <div>
            {cartItems.length === 0 ? (
              <p className="font-semibold text-center p-5">Your cart is empty</p>
            ) : (
              <ul className="h-[90vh] px-2 flex flex-col gap-5 overflow-y-scroll">
                {cartItems.map((item) => (
                  <li key={item.id} className="max-h-[150px] p-2 flex flex-row items-center justify-center gap-4 rounded-lg shadow-2xl">
                    <img className="w-1/5 h-full object-contain overflow-hidden" src={item.image} alt={item.title} />
                    <div className="w-4/5 flex flex-row items-center justify-between">
                      <div className="">
                        <h4 className="product-title text-lg font-semibold leading-5 mb-2">{item.title}</h4>
                        <p className="text-lg font-semibold mb-5">${item.price.toFixed(2)}</p>
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
        <div className='m-2 p-4 h-fit border-2 border-b-gray-700 rounded-2xl'>
          <h3 className='flex flex-row justify-between gap-10'><span>Total:</span><span>${total.toFixed(2)}</span> </h3>
          <h4 className='flex flex-row justify-between gap-10 mb-10 text-emerald-600'><span>Discount (10%):</span><span>-${discount.toFixed(2)}</span></h4>
          <h2 className='flex flex-row justify-between gap-10 text-2xl font-semibold'><span>Price:</span><span>${finalPrice.toFixed(2)}</span></h2>
        </div>
      </div>
    </div>
  )
}

export default Carts