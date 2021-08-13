
// import {FETCH_AUTO_PENDING, FETCH_AUTO_SUCCESS, FETCH_AUTO_ERROR} from '../actions/actions';
import config from "../../config";
import initialState from "../initialState";
const FETCH_AUTO_PENDING = 'FETCH_AUTO_PENDING';
const FETCH_AUTO_SUCCESS = 'FETCH_AUTO_SUCCESS';
const FETCH_AUTO_ERROR = 'FETCH_AUTO_ERROR';
const auto = function(store = initialState.auto ,action){
    switch(action.type){
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
        case FETCH_AUTO_SUCCESS:
            return { ...store, items: action.payload };
        case FETCH_AUTO_PENDING:
            return { ...store, pending: action.payload };
        case FETCH_AUTO_ERROR:
            return { ...store, error: action.payload };
        default:
            return store;
    }
}

export const fetchAUTOPending = (bool) => {
    return {
        type: FETCH_AUTO_PENDING,
        payload: bool,
    };
}

export const fetchAUTOSuccess = (auto) => {
    return {
        type: FETCH_AUTO_SUCCESS,
        payload: auto,
    };
}

export const fetchAUTOError = (bool) => {
    return {
        type: FETCH_AUTO_ERROR,
        payload: bool,
    };
}
export default auto;
