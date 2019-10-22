import products from '../StaticData/plants.json';

const getProducts = () => {
  return Promise.resolve(products);
}

export default getProducts;
