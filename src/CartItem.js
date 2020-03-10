import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import { Link } from 'react-router-dom';
// import './CartItem.css';

function CartItem({ count, name, id }) {
  const dispatch = useDispatch();
  const productCount = useSelector(store => store.cart[id]);

  const addItem = () => dispatch(addToCart(id));
  const removeItem = () => { if (productCount) dispatch(removeFromCart(id)) };

  return (
    <div className="CartItem">
      <div className="CartItem-container">
        <h2><Link to={`/products/${name}`}>{name}</Link> Total: {count}</h2>
        <button className="CartItem-btn" onClick={addItem}>+</button>
        <button className="CartItem-btn" onClick={removeItem} disabled={productCount ? false : true}>-</button>
      </div>
    </div>
  )
}

export default CartItem;