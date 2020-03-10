import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import './ProductItem.css';

function ProductItem({ id, name, description, price, image_url }) {
  const dispatch = useDispatch();
  const productCount = useSelector(store => store.cart[id])

  const addItem = () => dispatch(addToCart(id));
  const removeItem = () => { if (productCount) dispatch(removeFromCart(id)) };

  return (
    <div className="ProductItem">
      <img className="ProductItem-img" src={image_url} alt={name} />
      <div className="ProductItem-container">
        <h2>{name}</h2>
        <div className="ProductItem-price">{price}</div>
        <div className="ProductItem-description">{description}</div>
        <button className="ProductItem-btn" onClick={addItem}>Add to Cart</button>
        <button className="ProductItem-btn" onClick={removeItem} disabled={productCount ? false : true}>Remove from Cart</button>
      </div>
    </div>
  )
}

export default ProductItem;