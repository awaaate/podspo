import React from'react';
import {Link} from'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

import {auth} from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { toggleCart } from '../../redux/cart/cart-actions.js'
import {connect} from 'react-redux'
const Header = ({currentUser, toggleCart, hidden}) => { 
    console.log(toggleCart)
    return (
    <div className="header">
        <Link className="logo-container" to="/" >
            <Logo />
        </Link>
        <div className="options" >
            <Link className="option" to="/shop">
                shop
            </Link>
            <Link className="option" to="/contact">
                contact
            </Link>
            {currentUser?(
                    <div className="option" onClick={() => auth.signOut()}>
                    sign out
                </div>
                ):(
                    <Link className="option" to="/signin">
                    sign in
                </Link>
                )
            }
            <CartIcon />
        </div>
        {hidden? null: (
            <CartDropdown  />
        )}
    </div>
)}

const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
})

export default connect(mapStateToProps)(Header)