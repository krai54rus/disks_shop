// import axios from 'axios'
import {fetchAUTOPending, fetchAUTOSuccess, fetchAUTOError} from '../reducers/auto';
import config from "../../config";
export const getAuto = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchAUTOPending(true))
            const getAuto = await fetch(`${config.apiUrl}/auto`)
            .then(res => res.json())
            .then(res => res );
            console.log('getAuto ',getAuto);
            dispatch(fetchAUTOSuccess(getAuto))
        } catch (e) {
            dispatch(fetchAUTOError(true))
            dispatch(fetchAUTOPending(false))
            setTimeout(()=> {
                dispatch(fetchAUTOError(false))
            }, 2000)
        }

    }
}
