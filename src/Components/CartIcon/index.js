import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

import './style.css';

export default class CartIcon extends Component {
  render() {
    return (
      <div className="cart-icon">
        <i className="fas fa-shopping-cart">
        </i>
        <Badge pill variant="danger" className="quantity-nums">1</Badge>
      </div>
    )
  }
}
