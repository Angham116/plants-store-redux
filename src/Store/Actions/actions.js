import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  CLEAR_CART
} from './types';

const addToCart = (product, quantity) => {
  console.log(product)
  return {
    type: ADD_TO_CART,
    product: product,
    quantity
  }
};


// delete action creator
const deleteFromCart = (productId) => {
  // console.log(666, productId)
  return {
    type: DELETE_FROM_CART, // action type
    productId // action payload
  }
}

// clear cart action creator
const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export {
  addToCart,
  deleteFromCart,
  clearCart
};

