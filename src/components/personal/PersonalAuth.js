import React, { useState } from 'react';
function PersonalAuth(){
    const [isRegister,setRegister] = useState(false);
    const [regError,setRegError] = useState('');
    const [authError,setAuthError] = useState('');
    function toRegister(change){
        setRegister(change);
    }
    function goAuth(){
        console.log('auth');
    }
    function goRegister(){
        console.log('register');
    }
    return(
        <div className="personal-auth">
            <div className="personal-auth__form">
                <div className="auth__form_title">
                    <img src="/img/user-white.svg" alt="" />
                </div>
                {
                isRegister
                    ? <div className="auth__form_elements">
                        <div className="auth__form_inputs">
                            <div className="auth__form_inputs-input">
                                <input type="text" placeholder="Логин"/>
                            </div>
                            <div className="auth__form_inputs-input">
                                <input type="text" placeholder="Пароль"/>
                            </div>
                            <div className="auth__form_inputs-input">
                                <input type="text" placeholder="Подтверждение пароля"/>
                            </div>
                        </div>
                        <div className="auth-error">
                            <span>{regError}</span>
                        </div>
                        <div className="auth__form_inputs-button">
                            <div className="auth__form_inputs-button_btn" onClick={() => goRegister()}>ЗАРЕГИСТРИРОВАТЬСЯ</div>
                        </div>
                    </div>
                    :   <div className="auth__form_elements">
                        <div className="auth__form_inputs">
                            <div className="auth__form_inputs-input">
                                <input type="text" placeholder="Логин"/>
                            </div>
                            <div className="auth__form_inputs-input">
                                <input type="text" placeholder="Пароль"/>
                            </div>
                        </div>
                        <div className="auth-error">
                            <span>{authError}</span>
                        </div>
                        <div className="auth__form_inputs-button">
                            <div className="auth__form_inputs-button_btn" onClick={() => goAuth()}>ВОЙТИ</div>
                        </div>
                    </div>
                }
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
