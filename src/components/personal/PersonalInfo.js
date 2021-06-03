import React from 'react';
function PersonalInfo(){
    return(
        <div className="personal-info">
            <div className="personal-info__title">
                <h1>Личные данные</h1>
            </div>
            <div className="personal-info__data">
                <div className="personal-info__data_list">
                    <div className="info__data_list_item">
                        <span>Имя: </span>
                        <span>Евгений</span>
                    </div>
                    <div className="info__data_list_item">
                        <span>Фамилия: </span>
                        <span>Ушаков</span>
                    </div>
                    <div className="info__data_list_item">
                        <span>E-mail: </span>
                        <span>krai54rus@gmail.com</span>
                    </div>
                    <div className="info__data_list_item">
                        <span>Телефон: </span>
                        <span>+7 983-314-49-36</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo;