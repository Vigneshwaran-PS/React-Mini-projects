import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ totalProductInCart }) => {
  return (
    <div className='navbar'>
      <div className="logo">Shopify</div>
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
