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
                        <span>Логин: </span>
                        <input type="text" defaultValue="Admin" />
                    </div>
                    <div className="info__data_list_item">
                        <span>ФИО: </span>
                        <input type="text" defaultValue="" />
                    </div>
                    <div className="info__data_list_item">
                        <span>E-mail: </span>
                        <input type="text" defaultValue="" />
                    </div>
                    <div className="info__data_list_item">
                        <span>Телефон: </span>
                        <input type="text" defaultValue="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo;