import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import getProducts from '../../API/getProducts'

import ProductCard from '../ProductCard';

export default class Home extends Component {

  state = {
    products: []
  }

  async componentDidMount(){
    try {
      const products = await getProducts();
      // console.log(11111111, products)
      this.setState({ products })
    } catch(e) {
      console.log('Errrrrrrrrr from Home Comp.')
    }
  }

  render() {
    const  { products } = this.state;
    return (
      <div>
        <h1>Products</h1>
        <Row>
          {products.length && (
            products.map(product => {
              return (
                <Col lg="3" key={product.id}>
                  <ProductCard product={product}/>
                </Col>
              )
            })
          )}
        </Row>
      </div>
    )
  }
}
