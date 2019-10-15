import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'react-bootstrap';

import './style.css';

function CartIcon(props) {
  const { totalQuantity } = props;
    return (
      <div className="cart-icon">
        <i className="fas fa-shopping-cart">
        </i>
        <Badge pill variant="danger" className="quantity-nums">{totalQuantity}</Badge>
      </div>
    )
}


// to take data from the central state
const mapStateToProps = (state) => {
  return {
    totalQuantity: state.cart.reduce((total, product) => total + parseInt(product.quantity), 0)
  }
}

export default connect(mapStateToProps)(CartIcon)
