import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';

import {
  deleteFromCart
} from '../../Store/Actions/actions';
class CartItem extends Component {

  handleDeleteProduct = (productId) => {
    this.props.deleteFromCart(productId)
  }

  render() {
    const { product, quantity } = this.props;
    return (
      <>
      <Card>  
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}$</Card.Text>
          <Card.Text>Quantity: {quantity}</Card.Text>
          <Card.Text>Total: {product.price * quantity} $</Card.Text>
          <Button 
            variant="danger"
            onClick={() => this.handleDeleteProduct(product.id)}
          >
            <i className="fa fa-trash"></i>
            Delete
          </Button>
        </Card.Body>
      </Card>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (productId) => dispatch(deleteFromCart(productId))
  }
}

export default connect(null, mapDispatchToProps)(CartItem);

