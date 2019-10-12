import {
  ADD_TO_CART
} from '../Actions/types';

const cartReducer = (state, action) => {
  switch(action.type){
    case ADD_TO_CART: {
      return {
        cart: [
          ...state.cart,
          // object of the new product on the shopping cart
          {
            // action from action creator
            product: action.product,
            quantity: action.quantity
          }
        ]
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
