import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function ProductCard(props){
    const { product } = props;
    return (
      <>
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Price: {product.price}$</Card.Text>
        </Card.Body>
        <Link to={`/product/${product.id}`}>Details</Link>
      </Card>
      </>
    )
}

