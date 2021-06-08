import React from 'react';
function PersonalAuth(){
    return(
        <div className="personal-auth">
            <div className="personal-auth__form">
                <div className="auth__form_title">
                    {/* <h2>Авторизация</h2> */}
                    <img src="/img/user-white.svg" alt="" />
                </div>
                <div className="auth__form_elements">
                    <div className="auth__form_inputs">
                        <div className="auth__form_inputs-input">
                            <input type="text" placeholder="Логин"/>
                        </div>
                        <div className="auth__form_inputs-input">
                            <input type="text" placeholder="Пароль"/>
                        </div>
                    </div>
                    <div className="auth__form_inputs-button">
                        <div className="auth__form_inputs-button_btn">ВОЙТИ</div>
                    </div>
                </div>
                <div className="to-register">
                    <span>Регистрация</span>
                </div>
            </div>
        </div>
    )
}
export default PersonalAuth;
