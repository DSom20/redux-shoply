import React from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';

function ProductList() {
  const inventory = useSelector(store => store.inventory)

  const listJSX = Object.entries(inventory)
    .map(entry => 
      <ProductItem 
        key={entry[0]} 
        id={entry[0]} 
        name={entry[1].name}
        price={entry[1].price}
        description={entry[1].description}
        image_url={entry[1].image_url}
      />
    );

  return (
    <div className="ProductList">
      <h1>Product List</h1>
      {listJSX}
    </div>
  )
}

export default ProductList;