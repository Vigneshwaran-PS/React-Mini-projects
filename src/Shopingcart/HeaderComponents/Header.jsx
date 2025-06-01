import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import searchIcon from '/Users/vignesh/Downloads/Learning/Front End/React JS/logic-first-tamil/All-in-one/public/search.png'

const Header = ({ totalProductInCart, state, dispatch}) => {
  return (
    <div className='navbar'>
      <div className="logo">Shopify</div>
      <div className="search-bar">
        <input type="text" 
                className="search-field" 
                value={state.search}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
                  dispatch({ type: 'SEARCH', payload: value });
                }}                
        />
        <img src={searchIcon} alt="" />
      </div>
      <ul>
        <li><Link to="/shop/item">Home</Link></li>
        <li>
          <Link to="/shop/cart">
            {totalProductInCart > 0 && <span className='cart-item-count'>{totalProductInCart}</span>}
            View Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
