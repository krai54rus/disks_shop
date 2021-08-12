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
