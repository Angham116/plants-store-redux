import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// import {
//   productUrl
// } from '../../urls';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <>
      {/* {console.log(product)} */}
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}$</Card.Text>
          {/* <Button variant="primary">Details</Button> */}
        </Card.Body>
        <Link to={`/product/${product.id}`}>Details</Link>
      </Card>
      </>
    )
  }
}
