import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeDiscount } from './actions';
import Form from './Form';



function Cart() {
  const { 
    cart,
    currentDiscountKey, 
    availableDiscounts, 
    inventory } = useSelector(store => store);

  // const cart = useSelector(store => store.cart);
  // const currentDiscountKey = useSelector(store => store.currentDiscountKey);
  // const availableDiscounts = useSelector(store => store.availableDiscounts)
  // const inventory = useSelector(store => store.inventory);
  const dispatch = useDispatch();

  const cartItems = Object
    .entries(inventory)
    .filter(([productId, _]) => productId in cart)
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
  
  let totalPrice = cartItems.reduce((acc, product) => acc + (product.price * product.count), 0).toFixed(2);
  if(currentDiscountKey) {
    totalPrice *= 1 - availableDiscounts[currentDiscountKey];
  }

  const removeCoupon = () => dispatch(removeDiscount())

  const coupon = (
      <div>
        <span>Current Coupon: {currentDiscountKey}</span>
        <button onClick={removeCoupon}>X</button>
      </div>
    )

  return (
    <div>
      <h1>Cart</h1>
      {listJSX}
      <div>Total Price: {totalPrice}</div>
      {currentDiscountKey? coupon : null}
      <Form />
    </div>
  )
}

export default Cart;