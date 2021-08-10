
// import {FETCH_AUTO_PENDING, FETCH_AUTO_SUCCESS, FETCH_AUTO_ERROR} from '../actions/actions';
import config from "../../config";
import initialState from "../initialState";
const FETCH_AUTO_PENDING = 'FETCH_AUTO_PENDING';
const FETCH_AUTO_SUCCESS = 'FETCH_AUTO_SUCCESS';
const FETCH_AUTO_ERROR = 'FETCH_AUTO_ERROR';
const auto = function(store = initialState.auto ,action){
    switch(action.type){
        case FETCH_AUTO_SUCCESS:
            return { ...store, store: action.payload };
        case 'GET_STORE':
            return { ...store};
        case 'SAVE_ALL':
            // let autoAll = [];
            const res = fetch(`${config.apiUrl}/auto`)
            .then(res=>res.json())
            .then(res=>{
                // autoAll = res;
                console.log(res);
                return res;
            });
            return {...store, items:res};
        default:
            return store;
    }
}

export const fetchAUTOPending = () => {
    return {
        type: FETCH_AUTO_PENDING
    };
}

export const fetchAUTOSuccess = (auto) => {
    return {
        type: FETCH_AUTO_SUCCESS,
        payload: auto,
    };
}

export const fetchAUTOError = () => {
    return {
        type: FETCH_AUTO_ERROR
    };
}
export default auto;
