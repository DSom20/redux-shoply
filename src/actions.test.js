import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import { addToCart, removeFromCart } from './actions';

const id = "123";

describe("addToCart", function () {
  it("returns an action with a payload", function () {
    expect(addToCart(id)).toEqual({type: ADD_TO_CART, payload: id})
  })
})

describe("removeFromCart", function () {
  it("returns an action with a payload", function () {
    expect(removeFromCart(id)).toEqual({type: REMOVE_FROM_CART, payload: id})
  })
})