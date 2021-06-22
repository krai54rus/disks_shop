import config from "../../config";

const disks = function(store,action){
    switch(action.type){
        case 'GET_ALL':
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