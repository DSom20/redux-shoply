import React from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(store => store.cart);
  const inventory = useSelector(store => store.inventory);

  const cartItems = Object
    .entries(inventory)
    .filter(([productId, productInfo]) => productId in cart)
    .map(([productId, productInfo]) => {
      return {
        id: productId,
        ...productInfo,
        count: cart[productId]
      }
    });

  const listJSX = cartItems
    .map(entry =>
      <CartItem
        key={entry.id}
        id={entry.id}
        name={entry.name}
        price={entry.price}
        description={entry.description}
        image_url={entry.image_url}
        count={entry.count}
      />
    );

  return (
    <div>
      <h1>Cart</h1>
      {listJSX}
    </div>
  )
}

export default Cart;