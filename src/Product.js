import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './actions';
import { useParams } from 'react-router-dom';
import './Product.css';

function Product() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const inventory = useSelector(store => store.inventory);

  const product = Object.entries(inventory).find(product => product[1].name === name);
  
  const id = product[0];
  const { price, description, image_url } = product[1];

  const productCount = useSelector(store => store.cart[id]);

  const addItem = () => dispatch(addToCart(id));
  const removeItem = () => { if (productCount) dispatch(removeFromCart(id)) };

  return (
    <div className="Product">
      <img className="Product-img" src={image_url} alt={name} />
      <div className="Product-container">
        <h2>{name}</h2>
        <div className="Product-price">{price}</div>
        <div className="Product-description">{description}</div>
        <button className="Product-btn" onClick={addItem}>Add to Cart</button>
        <button className="Product-btn" onClick={removeItem} disabled={productCount ? false : true}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default Product;