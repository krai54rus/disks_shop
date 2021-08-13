// import axios from 'axios'
import {fetchCartPending, fetchCartSuccess, fetchCartError} from '../reducers/cart';
import config from "../../config";
export const getCart = () => {
    return async (dispatch) => {
        // try {
            dispatch(fetchCartPending(true))
            const getCart = await fetch(`${config.apiUrl}/cart/getCart`)
            .then(res => res.json())
            .then(res => res )
            .catch(error => {
                dispatch(fetchCartError(error));
            });
            console.log('getCart ',getCart);
            dispatch(fetchCartSuccess(getCart));
            dispatch(fetchCartPending(false));
        // } catch (e) {
        //     dispatch(fetchDISKSError(true))
        //     dispatch(fetchDISKSPending(false))
        //     setTimeout(()=> {
        //         dispatch(fetchDISKSError(false))
        //     }, 2000)
        // }

    }
}

export const addToCart = (prodInfo) => {
    return async (dispatch) => {
            dispatch(fetchCartPending(true))
            const addToCart = await fetch(`${config.apiUrl}/cart/addToCart`,{
                method:'POST',
                body: JSON.stringify(prodInfo),
            })
            .then(res => res.json())
            .then(res => res )
            .catch(error => {
                dispatch(fetchCartError(error));
            });
            console.log('addToCart ',addToCart);
            dispatch(fetchCartSuccess(addToCart));
            dispatch(fetchCartPending(false));

    }
}
