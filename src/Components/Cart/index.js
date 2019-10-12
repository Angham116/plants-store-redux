import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import getProducts from '../../API/getProducts';

import CartItem from '../CartItem';
export default class Cart extends Component {

  state = {
    products: []
  }

  async componentDidMount(){
    try {
      const products = await getProducts();
      // console.log(11111111, products)
      this.setState({ products })
    } catch(e) {
      console.log('Errrrrrrrrr from Cart Comp.')
    }
  }


  render() {
    const  { products } = this.state;
    return (
      <div>
        <h1>Cart</h1>
        <Row>
          {products.length && (
            products.map(product => {
              return (
                <Col lg="3" key={product.id}>
                  <CartItem product={product}/>
                </Col>
              )
            })
          )}
        </Row>
        <h2>Total: 3000$</h2>
        <Button > Pay </Button>
      </div>
    )
  }
}
