import products from '../StaticData/plants.json.js';

const getProduct = (id) => {
  const product = products.filter(product => product.id === parseInt(id));
  return Promise.resolve(product)
};

export default getProduct;

