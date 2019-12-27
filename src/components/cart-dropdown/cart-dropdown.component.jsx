import React from 'react';
import CustomButton from '../costum-button/costum-button.component';

import './cart-dropdown.styles.scss';
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({items}) =>{
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' >
                {items.map(({id, ...otherProps}) => (
                    <CartItem key={id} {...otherProps}/>
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {items}}) =>({
    items,
})
export default connect(mapStateToProps)(CartDropdown)