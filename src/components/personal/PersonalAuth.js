import React from 'react';
function PersonalAuth(){
    return(
        <div className="personal-auth">
            <div className="personal-auth__form">
                <div className="auth__form_title">
                    <span>Авторизация</span>
                </div>
                <div className="auth__form_elements">
                    <div className="auth__form_inputs">
                        <div className="auth__form_inputs-input">
                            <span>Логин</span>
                            <input type="text" placeholder="your_email@mail.ru"/>
                        </div>
                        <div className="auth__form_inputs-input">
                            <span>Пароль</span>
                            <input type="text" placeholder="your_email@mail.ru"/>
                        </div>
                    </div>
                    <div className="auth__form_inputs-button">
                        <span>Вход</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalAuth;