import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class CartItem extends Component {
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
          <Button variant="danger"><i className="fa fa-trash"></i>Delete</Button>
        </Card.Body>
      </Card>
      </>
    )
  }
}
