import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT, REMOVE_DISCOUNT } from './actionTypes';

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id
  }
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}

export function applyDiscount(discount) {
  return {
    type: APPLY_DISCOUNT,
    payload: discount
  }
}

export function removeDiscount() {
  return {
    type: REMOVE_DISCOUNT
  }
}