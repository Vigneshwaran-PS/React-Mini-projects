import React, { useEffect, useState } from 'react';
import Cart from './CartComponent/Cart';
import Home from './HomeComponent/Home';
import Header from './HeaderComponents/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import './ShoppingMain.css'

const ShoppingMain = () => {
  const [cart, setCart] = useState([]);
  const [totalProductInCart, setTotalProductInCart] = useState(0);

  useEffect(() => {
    const total = cart.map(product => product.quantity).reduce((acc, val) => acc + val, 0);
    setTotalProductInCart(total);
  }, [cart]);

  return (
    <>
    <div className="shop-cart-container">
        <div className="shop-container-wrapper">
            <Header totalProductInCart={totalProductInCart} />
            <div className="container">
                <Routes>
                {/* Redirect "/shop" to "/shop/item" */}
                <Route path="/" element={<Navigate to="item" />} />
                <Route path="item" element={<Home cart={cart} setCart={setCart} />} />
                <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
                </Routes>
            </div>
        </div>
    </div>
      
    </>
  );
};

export default ShoppingMain;
