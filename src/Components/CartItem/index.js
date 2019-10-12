import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class CartItem extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
      <Card>
        <Card.Img variant="top" src={product.product.image} />
        <Card.Body>
          <Card.Title>{product.product.name}</Card.Title>
          <Card.Text>Price: {product.product.price}$</Card.Text>
          <Card.Text>Quantity: {product.quantity}</Card.Text>
          <Card.Text>Total: {product.product.price * product.quantity} $</Card.Text>
          <Button variant="danger"><i className="fa fa-trash"></i>Delete</Button>
        </Card.Body>
      </Card>
      </>
    )
  }
}
