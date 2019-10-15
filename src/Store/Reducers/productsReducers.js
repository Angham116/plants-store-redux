import {
  ADD_TO_CART, 
  DELETE_FROM_CART,
  CLEAR_CART
} from '../Actions/types';

const cartReducer = (state, action) => {
  switch(action.type){
    case ADD_TO_CART: {
      console.log(333, action.product)
      return {
        cart: [
          ...state.cart,
          // object of the new product on the shopping cart
          {
            // action from action creator
            product: action.product[0],
            quantity: action.quantity
          }
        ]
      }
    }
    case DELETE_FROM_CART: {
      const { productId } = action;
      const prevState = { ...state };
      const cart = prevState.cart.filter(item => item.product.id !== productId)
      return {
        cart
      }
    }
    case CLEAR_CART: {
      const prevState = { ...state };
      const cart = [];
      return {
        cart
      }
    }

    // default: current state
    default:
      return state
  }
}

export {
  cartReducer
};
