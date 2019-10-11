import React, { Component } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';

import getProduct from '../../API/getProduct';
import { number } from 'prop-types';

export default class ProductDetails extends Component {

  state = {
    loading: true,
    productsNum: 0,
    product: []
  }

  async componentDidMount(){
    // fetch API with product id
    // console.log(this.props.match.params.id)
    // console.log(id)
    try {
      const { id } = this.props.match.params;
      const product = await getProduct(id);
      // console.log(222222, product)
      // setTimeout(() => {
      //   this.setState({ product, loading: false })
      // }, 2000)
      this.setState({ product, loading: false })
    } catch(err) {
      console.log('Errrrr from ProductDetails componentDidMount')
    }
  }

  handleChange = (e) => this.setState({ [e.target.name] : e.target.value })

  render() {
    const { product, loading } = this.state;

    if(loading)
      return <Spinner animation="border" variant="primary" />
    return (
      <>
        {/* {console.log(222, product)} */}
        {product.length && (
          <Card>
            <Card.Img variant="top" src={product[0].image}  style={{ width: '18rem' }}/>
            <Card.Body>
            {console.log(111111, product)}
              <Card.Title>{product[0].name}</Card.Title>
              <Card.Text>{product[0].description}</Card.Text>
              <Card.Text>Price: {product[0].price}$</Card.Text>
              <input type="number" name="productsNum" onChange={this.handleChange} />
            </Card.Body>
            <Button variant="primary" className="btn add-btn">Add To Card</Button>
          </Card>
        )}
      </>
    )
  }
}
