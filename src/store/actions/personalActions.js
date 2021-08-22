// import axios from 'axios'
import {fetchPersonalPending, fetchPersonalSuccess, fetchPersonalError, fetchPersonalNoAuth} from '../reducers/personal';
import config from "../../config";
export const checkAuth = () => {
    return async (dispatch) => {
            dispatch(fetchPersonalPending(true))
            const checkAuth = await fetch(`${config.apiUrl}/personal/checkAuth`,{
                method:'GET',
                credentials: "include",
                mode: "cors",
            })
            .then(res => res.json())
            .catch(error => {
                dispatch(fetchPersonalError(error));
                dispatch(fetchPersonalPending(false));
            });
            if (checkAuth && checkAuth.status == 'OK') {
                console.log('checkAuth ', checkAuth);
                document.cookie = `isAuth=${true}`;
                document.cookie = `login=${checkAuth.result.login}`;
                dispatch(fetchPersonalSuccess(checkAuth.result));
            } else {
                dispatch(fetchPersonalNoAuth())
            }
            dispatch(fetchPersonalPending(false));
    }
}
