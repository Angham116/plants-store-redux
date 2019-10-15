import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Button } from 'react-bootstrap';

import getProducts from '../../API/getProducts';

import CartItem from '../CartItem';
class Cart extends Component {

  render() {
    const { products, total } = this.props;
    return (
      <div>
        <h1>Cart</h1>
        <Row>
          {products.length && (
            products.map(({product, quantity}) => {
              return (
                <Col lg="3" key={product.id}>
                  <CartItem product={product} quantity={quantity}/>
                </Col>
              )
            })
          )}
        </Row>
        <h2>Total: {total}$</h2>
        <Button > Pay </Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { cart } = state;
  return {
    products: cart,
    total: cart.reduce((totalPrice, item) => totalPrice + item.quantity * item.product.price, 0)
  }
}


export default connect(mapStateToProps, getProducts)(Cart);
