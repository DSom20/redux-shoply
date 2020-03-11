import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import { Link } from 'react-router-dom';
import './CartItem.css';

function CartItem({ count, name, id, price }) {
  const dispatch = useDispatch();
  const productCount = useSelector(store => store.cart[id]);

  const addItem = () => dispatch(addToCart(id));
  const removeItem = () => { if (productCount) dispatch(removeFromCart(id)) };
  console.log(price);
  return (
    <div className="CartItem">
      <div className="CartItem-container">
        <h2><Link to={`/products/${name}`}>{name}</Link> </h2>
        <button className="CartItem-btn" onClick={removeItem} disabled={productCount ? false : true}>-</button>
        <h3>{count}</h3>
        <button className="CartItem-btn" onClick={addItem}>+</button>
        <h3>Price: {price}</h3>
      </div>
    </div>
  )
}

export default CartItem;