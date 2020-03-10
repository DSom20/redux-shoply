import rootReducer from './rootReducer';
import inventoryJSON from './data.json';

const id = "123";

const state1 = {
  inventory: inventoryJSON.products,
  cart: {}
}

const state2 = {
  inventory: inventoryJSON.products,
  cart: {[id]: 2}
}

const state3 = {
  inventory: inventoryJSON.products,
  cart: {[id]: 1}
}

describe("rootReducer", function () {
  it("returns previous state if not given action type", function () {
    expect(rootReducer(state1, {})).toEqual(state1);
  })

  it("adds item to cart", function () {
    const action = {type: "ADD_TO_CART", payload: id}
    const updatedState = {
      inventory: {...state1.inventory},
      cart: {[id]: 1}
    }
    expect(rootReducer(state1, action)).toEqual(updatedState);
  })

  it("decreases count of item from cart", function () {
    const action = {type: "REMOVE_FROM_CART", payload: id}
    const updatedState = {
      inventory: {...state2.inventory},
      cart: {[id]: 1}
    }
    expect(rootReducer(state2, action)).toEqual(updatedState);
  })

  it("removes item from cart if count was only 1", function () {
    const action = {type: "REMOVE_FROM_CART", payload: id}
    const updatedState = {
      inventory: {...state3.inventory},
      cart: {}
    }
    expect(rootReducer(state3, action)).toEqual(updatedState);
  })
})