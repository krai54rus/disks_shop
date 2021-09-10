// fetchProducts.js
import config from "../../config";
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './actions/actions';

function fetchProducts() {
    return (dispatch) => {
        dispatch(fetchProductsPending(true));
        fetch(`${config.apiUrl}/disks`)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            // if(res.error) {
            //     throw(res.error);
            // }
            // dispatch(fetchProductsSuccess(res.products);
            dispatch(fetchProductsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchProductsError(error));
        });
    }
}

export default fetchProducts;
