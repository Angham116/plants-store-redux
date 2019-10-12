import { createStore } from 'redux';

const initialState = {
  cart: [
    {
      product: {
        "id": 1,
        "name": "Plant 1",
        "price": "100",
        "image": "https://i.pinimg.com/564x/b1/af/1a/b1af1a92861f2fc385feb80c405c56df.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
      },
      quantity: 3
    },
    {
      product: {
        "id": 4,
        "name": "Plant 4",
        "price": "150",
        "image": "https://i.pinimg.com/564x/8a/b9/79/8ab979c2ad65651e824be1f7b653144c.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." 
      },
      quantity: 5
    }
  ]
};

// hypothetical reducer
const reducers = (state) => {
  return state;
}


// createStore take 2 params : (reducer & initialState)

const store = createStore(reducers, initialState)

export default store;
