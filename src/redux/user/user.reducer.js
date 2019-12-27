import {userTypes} from './user.types'

const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (currentState = INITIAL_STATE, action) =>{
    switch(action.type){
        case userTypes.SET_CURRENT_USER:
            return {
                ...currentState,
                currentUser: action.playload
            }
        default:
            return currentState
    }
}
export default userReducer