// import axios from 'axios'
import {fetchCartPending, fetchCartSuccess, fetchCartError} from '../reducers/cart';
import config from "../../config";
export const getCart = () => {
    return async (dispatch) => {
        // try {
            dispatch(fetchCartPending(true))
            const getCart = await fetch(`${config.apiUrl}/cart/getCart`,{
                method:'GET',
                credentials: "include",
                mode: "cors",
            })
            .then(res => res.json())
            .then(res => res )
            .catch(error => {
                dispatch(fetchCartError(error));
            });
            dispatch(fetchCartSuccess(getCart));
            dispatch(fetchCartPending(false));
        // } catch (e) {
        //     console.log('e',e);
        //     dispatch(fetchCartSuccess({}));
        //     dispatch(fetchCartError(e));
        //     dispatch(fetchCartPending(false));
        //     // setTimeout(()=> {
        //     //     dispatch(fetchDISKSError(false))
        //     // }, 2000)
        // }

    }
}

export const addToCart = (prodInfo) => {
    return async (dispatch) => {
        console.log(prodInfo);
            dispatch(fetchCartPending(true))
            const addToCart = await fetch(`${config.apiUrl}/cart/addToCart`,{
                method:'POST',
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                credentials: "include",
                mode: "cors",
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
