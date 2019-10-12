import {
  ADD_TO_CART
} from './types';

const addToCart = (product, quantity) => {
  console.log(product, quantity)
  return {
    type: ADD_TO_CART,
    product,
    quantity
  }
};

export {
  addToCart
};

