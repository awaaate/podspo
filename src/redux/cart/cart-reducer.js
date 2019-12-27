import actionTypes from './cart-types';

import {addItemToCart} from './cart-utils'
const INITIAL_STATE = {
    hidden: true,
    items: []
}
const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case actionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.playload)
            }
        default:
            return state
    }
}

export default cartReducer