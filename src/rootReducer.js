import inventoryJSON from './data.json';

const INITIAL_STATE = {
  inventory: inventoryJSON.products,
  cart: {}  // {productId: count, productId: count, ...}
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {...state, cart: addToCart({...state.cart}, action.payload)};
    case "REMOVE_FROM_CART":
      return {...state, cart: removeFromCart({...state.cart}, action.payload)};
    default:
      console.warn("Unable to find action type: ", action.type);
      return state;
  }
}

// HELPER FUNCTIONS

function addToCart(cart, productId) {
  if (productId in cart) {
    cart[productId] += 1;
  } else {
    cart[productId] = 1;
  }
  return cart;
}

function removeFromCart(cart, productId) {
  if (productId in cart && cart[productId] > 1) {
    cart[productId] -= 1;
  } else if (productId in cart && cart[productId] === 1) {
    delete cart[productId];
  }
  return cart;
}


export default rootReducer;