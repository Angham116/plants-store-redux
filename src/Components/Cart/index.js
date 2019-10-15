import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Button, Alert } from 'react-bootstrap';

import {
  clearCart
} from '../../Store/Actions/actions'

import CartItem from '../CartItem';
class Cart extends Component {

  state = {
    showAlert: false,
    variant: ''
  }


  handleOrder = () => {
    // send the request to the server
    this.props.clearCart();
    
    this.setState(
      {
      showAlert: true,
      variant: "success"
    }
    ,
    () => setTimeout(() => {
      this.setState({ showAlert: false, variant: "" })
    }, 1500)
    )
  }

  render() {
    const { showAlert, variant } = this.state;
    const { products, total } = this.props;
    return (
      <div>
        <h1>Cart</h1>
        <Alert show={showAlert} variant={variant}>
          We recieved your oreder, and we are working on it
        </Alert>
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
        <Button
          onClick={this.handleOrder}
        > Order </Button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(clearCart())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
