import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default class CartItem extends Component {
  render() {
    const quantity = 3;
    const { product } = this.props;
    return (
      <>
      {/* {console.log(product)} */}
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}$</Card.Text>
          <Card.Text>Quantity: 1</Card.Text>
          <Card.Text>Total: {product.price * quantity} $</Card.Text>
          <Button variant="danger"><i className="fa fa-trash"></i>Delete</Button>
        </Card.Body>
        {/* <Link to={`/product/${product.id}`}>Details</Link> */}
      </Card>
      </>
    )
  }
}
