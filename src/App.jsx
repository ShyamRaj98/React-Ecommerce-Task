import React, { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import MiniCart from './components/MiniCart';
import Home from './pages/Landing';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/cart';
import { PRODUCTS_ENDPOINT, REST_HOST_NAME } from './components/API';

function App() {
  useEffect(() => {
    fetch(`${REST_HOST_NAME}/${PRODUCTS_ENDPOINT}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((error) => { console.log(error) })
  }, [])

  const [productDetails, setProductDetails] = useState([])
  const [cartItems, setCartItems] = useState([]);
  const [miniCard, setMiniCard] = useState(false);

  console.log(productDetails);

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
      return;
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    
  };
  console.log(cartItems);

  const removeProduct = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  return (
    <>
      <Navbar count={cartItems.length} openMiniCart={() => setMiniCard(true)} />
      <Routes>
        <Route exact path='/' element={<Home productDetails={productDetails} addToCart={addToCart} />} />
        <Route path='/product/:id' element={<ProductDetail addToCart={addToCart} cart={cartItems} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeProduct={removeProduct} updateQty={updateQty} />} />
      </Routes>
      <MiniCart updateQty={updateQty} cartItems={cartItems} removeProduct={removeProduct} closeMiniCart={() => setMiniCard(false)} miniCard={miniCard} />
    </>

  )
}

export default App
