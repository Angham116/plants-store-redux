import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Button } from 'react-bootstrap';

import getProducts from '../../API/getProducts';

import CartItem from '../CartItem';
class Cart extends Component {

  // state = {
  //   products: []
  // }

  // async componentDidMount(){
  //   try {
  //     const products = await getProducts();
  //     // console.log(11111111, products)
  //     this.setState({ products })
  //   } catch(e) {
  //     console.log('Errrrrrrrrr from Cart Comp.')
  //   }
  // }


  render() {
    // const  { products } = this.state;
    const { products, total } = this.props;
    // console.log(products)
    return (
      <div>
        <h1>Cart</h1>
        <Row>
          {/* {console.log(444, this.props.total)} */}
          {products.length && (
            products.map(product => {
              return (
                <Col lg="3" key={product.product.id}>
                  <CartItem product={product}/>
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
  // console.log(state.cart)
  const { cart } = state;

  return {
    products: cart,
    total: cart.reduce((totalPrice, item) => totalPrice + item.quantity * item.product.price, 0)
  }
  // const total = cart.reduce((totalPrice, item) => {
    // console.log(totalPrice + item.product.price * item.quantity)
  // })
  // cart.map(item => {
    // console.log(item.product.price * item.quantity)
  // })
}

export default connect(mapStateToProps, getProducts)(Cart);
