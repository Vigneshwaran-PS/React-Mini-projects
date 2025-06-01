import React, { useEffect, useReducer, useState } from 'react';
import Cart from './CartComponent/Cart';
import Home from './HomeComponent/Home';
import Header from './HeaderComponents/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import './ShoppingMain.css'
import axios from 'axios'


const initialState = {
  search : '',
  products : [],
  loading : false
}

function reduce(state,action){
  switch(action.type){
    case 'FETCH_PRODUCTS':
      if(action.payload == null){
        return state;
      }
      const products = action.payload
      return {...state,products:products,search:'',loading:false}
    case 'SEARCH':
      let search = action.payload
      return {...state,search:search}
    case 'LOADING_TRUE':
      return {...state,loading:!state.loading}
    default: 
      return state;
  }
}

const ShoppingMain = () => {

  const [state,dispatch] = useReducer(reduce,initialState)
  const [cart, setCart] = useState([]);
  const [totalProductInCart, setTotalProductInCart] = useState(0);

  useEffect(() => {

    dispatch({type:'LOADING_TRUE'})
    const fetchProducts = async () => {
      try {
        const url = 'https://dummyjson.com/products';
        const response = await axios.get(url);

        const responseData = response.data;
        console.log("Response Data:", responseData);

        const responseProduct = responseData.products;
        dispatch({type:'FETCH_PRODUCTS',payload:responseProduct})
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const total = cart.map(product => product.quantity).reduce((acc, val) => acc + val, 0);
    setTotalProductInCart(total);
  }, [cart]);

  return (
    <>
    <div className="shop-cart-container">
        <div className="shop-container-wrapper">
            <Header totalProductInCart={totalProductInCart} state={state} dispatch={dispatch}/>
            <div className="container">
                <Routes>
                {/* Redirect "/shop" to "/shop/item" */}
                <Route path="/" element={<Navigate to="item" />} />
                <Route path="item" element={<Home products={state.products}  cart={cart} setCart={setCart} search={state.search} loading={state.loading}/>} />
                <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
                </Routes>
            </div>
        </div>
    </div>
      
    </>
  );
};

export default ShoppingMain;
