import {
  ADD_TO_CART, 
  DELETE_FROM_CART
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
    case DELETE_FROM_CART: {
      // console.log(999, action)
      const { productId } = action;
      // console.log(44, productId)
      const prevState = { ...state };
      // console.log(77, cart.cart)
      const cart = prevState.cart.filter(item => item.product.id !== productId)
      // console.log(888, remainingProducts)
      // delete nextState.cart[productId];
      return {
        cart
        // cart: [
          // ...state.cart,
          // {newCart: remainingProducts}
        // ]
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
