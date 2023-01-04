import * as ActionTypes from './ActionTypes';



export const CartProducts = (state = {
    errMess: null,
    cartProducts: []
}, action) => {
    switch(action.type) {
            case ActionTypes.ADD_CART_PRODUCTS:
            return{...state, isLoading: false, errMess: null, cartProducts: action.payload}
            
            case ActionTypes.ADD_CART_PRODUCTS_FAILED: 
            return{...state, isLoading: false, errMess: action.payload, cartProducts: []}
    
            case ActionTypes.ADD_CART:
            var cartProduct = action.payload;
            return {...state, cartProducts: state.cartProducts.concat(cartProduct)};
            
            default:
                return state;
    }
} 