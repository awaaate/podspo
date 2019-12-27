import React from 'react';

import {ReactComponent as ShoppingIconcon} from '../../assets/shopping-bag.svg'

import {connect} from 'react-redux'
import  {toggleCart} from '../../redux/cart/cart-actions'
import './cart-icon.styles.scss'
const CartIcon = ({toggleCart}) =>(
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIconcon  className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
});
export default connect(
    null,
    mapDispatchToProps
)(CartIcon)