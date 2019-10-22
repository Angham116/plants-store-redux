import products from '../StaticData/plants.json.js';

const getProducts = () => {
  return Promise.resolve(products);
}

export default getProducts;
