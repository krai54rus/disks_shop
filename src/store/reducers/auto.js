import config from "../../config";

const auto = function(store,action){
    switch(action.type){
        case 'GET_ALL':
            let autoAll = [];
            fetch(`${config.apiUrl}/auto`)
            .then(res=>res.json())
            .then(res=>{
                autoAll = res;
                return res;
            });
            return autoAll;
        case 'GET_TOP':
            return [];
        default:
            return store;
    }
}

export default auto;