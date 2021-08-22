import React, { useRef, useState } from 'react';
import config from '../../config';
function PersonalAuth(props){
    const [isRegister,setRegister] = useState(false);
    // const [regError,setRegError] = useState('');
    const [authError,setAuthError] = useState('');
    const login = useRef(null);
    const password = useRef(null);
    const repPassword = useRef(null);
    function toRegister(change){
        setRegister(change);
    }
    function validate(register = false){
        if (login.current.value.length < 5) {
            setAuthError('Логин должен содержать 5 или более символа');
            return false;
        }
        if (password.current.value.length < 5) {
            setAuthError('Пароль должен содержать 5 или более символа');
            return false;
        }
        if (register) {
            if (repPassword.current.value.length < 5) {
                setAuthError('Пароль должен содержать 5 или более символа');
                return false;
            }else{
                if (password.current.value !== repPassword.current.value) {
                    setAuthError('Пароли не совпадают');
                    return false;
                }
            }
        }
        return true;
    }
    function goAuth(){
        const resValidate = validate();
        if (resValidate) {
            setAuthError('');
            const bodyReq = {
                login: login.current.value,
                password: password.current.value,
            };
            fetch(`${config.apiUrl}/personal/auth`,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                credentials: "include",
                mode: "cors",
                body: JSON.stringify(bodyReq),
            })
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                if (res.status == "OK") {
                    document.cookie = `isAuth=${true}`;
                    document.cookie = `login=${res.result.login}`;
                    props.setUserInfo(res.result);
                    props.setAuth(true);
                }else{
                    setAuthError(res.result);
                }
            });
        }
    }
    function goRegister(){
        const resValidate = validate(true);
        if (resValidate) {
            setAuthError('');
            fetch(`${config.apiUrl}/personal/register?login=${login.current.value}&password=${password.current.value}`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                if (res.status == "OK") {
                    document.cookie = "isAuth=auth";
                    document.cookie = `login=${res.result.login}`;
                    props.setUserInfo(res.result);
                    props.setAuth(true);
                }else{
                    setAuthError(res.result);
                }
            })
        }
    }
    return(
        <div className="personal-auth">
            <div className="personal-auth__form">
                <div className="auth__form_title">
                    <img src="/img/user-white.svg" alt="" />
                </div>
                 <div className="auth__form_elements">
                        <div className="auth__form_inputs">
                            <div className="auth__form_inputs-input">
                                <input ref={login} type="text" placeholder="Логин"/>
                            </div>
                            <div className="auth__form_inputs-input">
                                <input ref={password} type="text" placeholder="Пароль"/>
                            </div>
                            {
                                isRegister &&
                                <div className="auth__form_inputs-input">
                                    <input ref={repPassword} type="text" placeholder="Подтверждение пароля"/>
                                </div>
                            }

                        </div>
                        <div className="auth-error">
                            <span>{authError}</span>
                        </div>
                        <div className="auth__form_inputs-button">
                            {
                                isRegister
                                ? <div className="auth__form_inputs-button_btn" onClick={() => goRegister()}>ЗАРЕГИСТРИРОВАТЬСЯ</div>
                                : <div className="auth__form_inputs-button_btn" onClick={() => goAuth()}>ВОЙТИ</div>
                            }
                        </div>
                    </div>
                <div className="to-register">
                    {
                        isRegister
                        ? <span onClick={() => toRegister(false)}>Авторизация</span>
                        : <span onClick={() => toRegister(true)}>Регистрация</span>
                    }
                </div>
            </div>
        </div>
    )
}
export default PersonalAuth;
