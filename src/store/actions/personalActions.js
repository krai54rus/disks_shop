// import axios from 'axios'
import {fetchPersonalPending, fetchPersonalSuccess, fetchPersonalError, fetchPersonalNoAuth} from '../reducers/personal';
import config from "../../config";
export const checkAuth = () => {
    return (dispatch) => {
            dispatch(fetchPersonalPending(true))
            const checkAuth = fetch(`${config.apiUrl}/personal/checkAuth`,{
                method:'GET',
                credentials: "include",
                mode: "cors",
            })
            .then(res => res.json())
            .catch(error => {
                console.log('checkautherror, ', error);
                dispatch(fetchPersonalError(error));
                dispatch(fetchPersonalPending(false));
            });

            if (checkAuth && checkAuth.status == 'OK') {
                console.log('checkAuth ', checkAuth);
                document.cookie = `isAuth=${true}`;
                document.cookie = `login=${checkAuth.result.login}`;
                dispatch(fetchPersonalSuccess(checkAuth.result));
            } else {
                dispatch(fetchPersonalNoAuth(checkAuth.result))
            }

            dispatch(fetchPersonalPending(false));
    }
}

export const authFunc = (login,password) => {
    return async (dispatch) => {
            dispatch(fetchPersonalPending(true))
            const bodyReq = {login,password};
            const authReq = await fetch(`${config.apiUrl}/personal/auth`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                credentials: "include",
                mode: "cors",
                body: JSON.stringify(bodyReq),
            })
            .then(res=>res.json())
            .catch(error => {
                dispatch(fetchPersonalError(error));
                dispatch(fetchPersonalPending(false));
            });

            if (authReq && authReq.status == 'OK') {
                console.log('authReq ', authReq);
                document.cookie = `isAuth=${true}`;
                document.cookie = `login=${authReq.result.login}`;
                dispatch(fetchPersonalSuccess(authReq.result));
            } else {
                dispatch(fetchPersonalNoAuth(authReq.result))
            }

            dispatch(fetchPersonalPending(false));
    }
}

export const registerFunc = (login,password) => {
    return async (dispatch) => {
            dispatch(fetchPersonalPending(true))
            const bodyReq = {login,password};
            const registerReg = await fetch(`${config.apiUrl}/personal/register`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                credentials: "include",
                mode: "cors",
                body: JSON.stringify(bodyReq),
            })
            .then(res=>res.json())
            .catch(error => {
                dispatch(fetchPersonalError(error));
                dispatch(fetchPersonalPending(false));
            });

            if (registerReg && registerReg.status == 'OK') {
                console.log('registerReg ', registerReg);
                document.cookie = `isAuth=${true}`;
                document.cookie = `login=${registerReg.result.login}`;
                dispatch(fetchPersonalSuccess(registerReg.result));
            } else {
                dispatch(fetchPersonalNoAuth(registerReg.result))
            }

            dispatch(fetchPersonalPending(false));
    }
}
