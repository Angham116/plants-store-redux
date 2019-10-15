import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Button, Spinner } from 'react-bootstrap';

import getProduct from '../../API/getProduct';

import {
  addToCart
} from '../../Store/Actions/actions';
class ProductDetails extends Component {

  state = {
    loading: true,
    quantity: 0,
    product: []
  }

  async componentDidMount(){
    try {
      const { id } = this.props.match.params;
      const product = await getProduct(id);
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

  handleAddToCart = () => {
    const { product, quantity} = this.state;
    this.props.addToCart(product, quantity)
  }

  render() {
    const { product, loading, quantity } = this.state;

    if(loading)
      return <Spinner animation="border" variant="primary" />
    return (
      <Row>
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
                <input 
                  type="number" 
                  name="quantity" 
                  onChange={this.handleChange} 
                />
                  </Card.Body>
                  <p>Total: {quantity}</p>
                  <Button 
                    variant="primary" 
                    className="btn add-btn"
                    onClick={this.handleAddToCart}
                  >Add To Card</Button>
                </Card>
            </Col>
          </>
        )}
      </Row>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // on the dispatch we call the creator function (the function that make the action(addToCart))
    addToCart: (product, quantity) => dispatch(addToCart(product, quantity))
  }
}

export default connect(null, mapDispatchToProps)(ProductDetails);

