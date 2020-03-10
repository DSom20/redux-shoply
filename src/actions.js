import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

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