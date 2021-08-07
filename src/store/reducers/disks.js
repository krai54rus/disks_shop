import config from "../../config";
import initialState from "../initialState";
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
        case 'GET_TOP':
            return [];
        default:
            return store;
    }
}

export default disks;
