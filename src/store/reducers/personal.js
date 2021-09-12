import config from "../../config";
import initialState from "../initialState";
const FETCH_PERSONAL_PENDING = 'FETCH_PERSONAL_PENDING';
const FETCH_PERSONAL_SUCCESS = 'FETCH_PERSONAL_SUCCESS';
const FETCH_PERSONAL_ERROR = 'FETCH_PERSONAL_ERROR';
const FETCH_PERSONAL_NO_AUTH = 'FETCH_PERSONAL_NO_AUTH';
const personal = function(store = initialState.personal ,action){
    switch(action.type){
        case FETCH_PERSONAL_SUCCESS:
            const persObj = action.payload;
            return { ...store, isAuth:true, login:persObj.login, user: persObj.user, disks: persObj.disks, garage: persObj.garage  };
            // return { ...store, isAuth:true, user };
        case FETCH_PERSONAL_PENDING:
            return { ...store, pending: action.payload };
        case FETCH_PERSONAL_ERROR:
            return { ...store, error: action.payload };
        case FETCH_PERSONAL_NO_AUTH:
            return { ...store, isAuth: false, errorText: action.payload };
        default:
            return store;
    }
}

export const fetchPersonalPending = (bool) => {
    return {
        type: FETCH_PERSONAL_PENDING,
        payload: bool,
    };
}

export const fetchPersonalSuccess = (personal) => {
    return {
        type: FETCH_PERSONAL_SUCCESS,
        payload: personal,
    };
}

export const fetchPersonalError = (bool) => {
    return {
        type: FETCH_PERSONAL_ERROR,
        payload: bool,
    };
}

export const fetchPersonalNoAuth = (errorText) => {
    return {
        type: FETCH_PERSONAL_NO_AUTH,
        payload: errorText,
    };
}
export default personal;
