import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import './ProductItem.css';

function ProductItem({ id, name, description, price, image_url }) {
  const dispatch = useDispatch();
  const productCount = useSelector(store => store.cart[id])

  const addItem = () => dispatch(addToCart(id));
  const removeItem = () => { if(productCount) dispatch(removeFromCart(id)) };

  return (
    <div>
      <h3>{name}</h3>
      <div>{price}</div>
      <div>{description}</div>
      <img className="ProductItem-img" src={image_url} alt={name}/>
      <button onClick={addItem}>Add to Cart</button>
      <button onClick={removeItem} disabled={productCount ? false : true}>Remove from Cart</button>
    </div>
  )
}

export default ProductItem;