// import axios from 'axios'
import {fetchDISKSPending, fetchDISKSSuccess, fetchDISKSError} from '../reducers/disks';
import config from "../../config";
export const getDisks = () => {
    return async (dispatch) => {
        // try {
            dispatch(fetchDISKSPending(true))
            console.log('config ', config);
            const getDISKS = await fetch(`${config.apiUrl}/disks`)
            .then(res => res.json())
            .then(res => res )
            .catch(error => {
                dispatch(fetchDISKSError(error));
            });
            console.log('getDISKS ',getDISKS);
            dispatch(fetchDISKSSuccess(getDISKS))
            dispatch(fetchDISKSPending(false))
        // } catch (e) {
        //     dispatch(fetchDISKSError(true))
        //     dispatch(fetchDISKSPending(false))
        //     setTimeout(()=> {
        //         dispatch(fetchDISKSError(false))
        //     }, 2000)
        // }

    }
}
