import React, { Component } from 'react';
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap';

import getProduct from '../../API/getProduct';

export default class ProductDetails extends Component {

  state = {
    loading: true,
    quantity: 0,
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

  handleChange = (e) => {
    if(e.target.value < 0){
      return ;
    }
    this.setState({ [e.target.name] : e.target.value })
  }

  render() {
    const { product, loading, quantity } = this.state;

    if(loading)
      return <Spinner animation="border" variant="primary" />
    return (
      <Row>
        {/* {console.log(222, product)} */}
        {product.length && (
          <>
            <Col lg={4}>
              <img src={product[0].image}  style={{ width: '80%' }} alt={`plant ${product[0].name}`}/>
            </Col>
            <Col lg={8}>
              <Card>
                <Card.Body>
                <Card.Title>{product[0].name}</Card.Title>
                <Card.Text>{product[0].description}</Card.Text>
                    <Card.Text>Price: {product[0].price}$</Card.Text>
                <input type="number" name="quantity" onChange={this.handleChange} />
                  </Card.Body>
                  <p>Total: {quantity}</p>
                  <Button variant="primary" className="btn add-btn">Add To Card</Button>
                </Card>
            </Col>
          </>
        )}
      </Row>
    )
  }
}
