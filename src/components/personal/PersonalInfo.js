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
                        <input type="text" defaultValue="Евгений" />
                    </div>
                    <div className="info__data_list_item">
                        <span>Фамилия: </span>
                        <input type="text" defaultValue="Ушаков" />
                    </div>
                    <div className="info__data_list_item">
                        <span>E-mail: </span>
                        <input type="text" defaultValue="krai54rus@gmail.com" />
                    </div>
                    <div className="info__data_list_item">
                        <span>Телефон: </span>
                        <input type="text" defaultValue="+7 983-314-49-36" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo;