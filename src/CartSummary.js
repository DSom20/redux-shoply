import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartSummary() {
  const cart = useSelector(store => store.cart);

  const totalProducts = Object.values(cart).reduce((acc, val) => acc + val, 0);

  return (
    <div className="Cart">
      <h2>The <Link to="/cart">cart</Link> has {totalProducts} items</h2>
      <Link to="/">Home!</Link>
    </div>
  );
}

export default CartSummary;