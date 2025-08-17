import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ count = "0", openMiniCart }) {
  const navigate = useNavigate()
  return (
    <header className='bg-white py-3 px-2 w-full fixed top-0 z-10 shadow-lg'>
      <div className='container lg mx-auto px-2 flex justify-between items-center'>
        <h1 className='text-purple-500 text-2xl logo cursor-pointer' onClick={()=> navigate('/')}>Shyam Store</h1>
        <ul className='menu-contain ml-auto mr-2 flex flex-row gap-1'>
          <li><Link to="/" className='p-1 text-black text-lg font-bold hover:text-purple-500'>Products</Link></li>
          <li><Link to="/cart" className='p-1 text-black text-lg font-bold hover:text-purple-500'>Cart</Link></li>
        </ul>
        <div className='relative p-2 w-fit ml-auto cursor-pointer' onClick={openMiniCart}>
          <MdOutlineShoppingCart size={30} />
          <span className='bg-purple-500 text-white w-5 h-5 rounded-full absolute top-0 right-0 flex items-center justify-center'>{count}</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
