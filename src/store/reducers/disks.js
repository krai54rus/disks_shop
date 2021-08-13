import config from "../../config";
import initialState from "../initialState";
const FETCH_DISKS_PENDING = 'FETCH_DISKS_PENDING';
const FETCH_DISKS_SUCCESS = 'FETCH_DISKS_SUCCESS';
const FETCH_DISKS_ERROR = 'FETCH_DISKS_ERROR';
const disks = function(store = initialState.disks ,action){
    switch(action.type){
        case 'GET_ALL_DISKS':
            let diskAll = [];
            fetch(`${config.apiUrl}/disks/all`)
            .then(res=>res.json())
            .then(res=>{
                diskAll = res;
                return res;
            });
            return diskAll;
        case FETCH_DISKS_SUCCESS:
            return { ...store, items: action.payload };
        case FETCH_DISKS_PENDING:
            return { ...store, pending: action.payload };
        case FETCH_DISKS_ERROR:
            return { ...store, error: action.payload };
        default:
            return store;
    }
}

export const fetchDISKSPending = (bool) => {
    return {
        type: FETCH_DISKS_PENDING,
        payload: bool,
    };
}

export const fetchDISKSSuccess = (DISKS) => {
    return {
        type: FETCH_DISKS_SUCCESS,
        payload: DISKS,
    };
}

export const fetchDISKSError = (bool) => {
    return {
        type: FETCH_DISKS_ERROR,
        payload: bool,
    };
}
export default disks;
