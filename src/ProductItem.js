import React from 'react';
import './ProductItem.css';
import { Link } from 'react-router-dom';

function ProductItem({ id, name }) {

  return (
    <div className="ProductItem">
      <div className="ProductItem-container">
        <h2><Link to={`/products/${name}`}>{name}</Link></h2>
      </div>
    </div>
  )
}

export default ProductItem;