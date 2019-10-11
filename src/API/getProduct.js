import products from '../StaticData/plants.json';

const getProduct = (id) => {
  // console.log(33333, id)
  const product = products.filter(product => product.id == id);
  // console.log(producte)
  return Promise.resolve(product)
};


export default getProduct;

