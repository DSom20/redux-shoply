import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(store => store.cart);

  const totalProducts = Object.values(cart).reduce((acc, val) => acc + val, 0);

  return (
    <div className="Cart">
      <h2>The cart has {totalProducts} number of items</h2>
    </div>
  );
}

export default Cart;