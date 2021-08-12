// import config from "../../config";
import initialState from "../initialState";
const FETCH_CART_PENDING = 'FETCH_CART_PENDING';
const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
const FETCH_CART_ERROR = 'FETCH_CART_ERROR';
const cart = function(store = initialState.cart ,action){
    switch(action.type){
        case FETCH_CART_SUCCESS:
            return { ...store, items: action.payload };
        case FETCH_CART_PENDING:
            return { ...store, pending: action.payload };
        case FETCH_CART_ERROR:
            return { ...store, error: action.payload };
        default:
            return store;
    }
}

export const fetchCartPending = (bool) => {
    return {
        type: FETCH_CART_PENDING,
        payload: bool,
    };
}

export const fetchCartSuccess = (cart) => {
    return {
        type: FETCH_CART_SUCCESS,
        payload: cart,
    };
}

export const fetchCartError = (bool) => {
    return {
        type: FETCH_CART_ERROR,
        payload: bool,
    };
}
export default cart;
