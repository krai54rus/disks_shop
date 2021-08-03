import config from "../../config";
import initialState from "../initialState";
const auto = function(store = initialState.auto ,action){
    switch(action.type){
        case 'GET_ALL':
            console.log(store);
            return store;
        case 'GET_TOP':
            return [];
        case 'SAVE_ALL':
            // let autoAll = [];
            const res = fetch(`${config.apiUrl}/auto`)
            .then(res=>res.json())
            .then(res=>{
                // autoAll = res;
                console.log(res);
                return res;
            });
            return {...store, store:res};
        default:
            return store;
    }
}

export default auto;
