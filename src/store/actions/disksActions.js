// import axios from 'axios'
import {fetchDISKSPending, fetchDISKSSuccess, fetchDISKSError} from '../reducers/disks';
import config from "../../config";
export const getDisks = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchDISKSPending(true))
            const getDISKS = await fetch(`${config.apiUrl}/disks`)
            .then(res => res.json())
            .then(res => res );
            console.log('getDISKS ',getDISKS);
            dispatch(fetchDISKSSuccess(getDISKS))
        } catch (e) {
            dispatch(fetchDISKSError(true))
            dispatch(fetchDISKSPending(false))
            setTimeout(()=> {
                dispatch(fetchDISKSError(false))
            }, 2000)
        }

    }
}
