import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import config from "../../config";
function PersonalInfo(props){
    const name = useRef(null);
    const email = useRef(null);
    const phone = useRef(null);
    const personal = useSelector(state => state.personal);
    function saveInfo(){
        const userInfo = {
            login:  document.cookie.match(/login=(.+?)(;|$)/)[1],
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value,
        }
        fetch(`${config.apiUrl}/personal/update`,
        {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            return res;
        });
    }
    return(
        <div className="personal-info">
            <div className="personal-info__title">
                <h1>Личные данные</h1>
            </div>
            <div className="personal-info__data">
                <div className="personal-info__data_list">
                    <div className="info__data_list_item">
                        <span>Логин: </span>
                        <span>{personal.login}</span>
                    </div>
                    <div className="info__data_list_item">
                        <span>ФИО: </span>
                        <input ref={name} type="text" defaultValue={personal.user.name} />
                    </div>
                    <div className="info__data_list_item">
                        <span>E-mail: </span>
                        <input ref={email} type="text" defaultValue={personal.user.email}  />
                    </div>
                    <div className="info__data_list_item">
                        <span>Телефон: </span>
                        <input ref={phone} type="text" defaultValue={personal.user.phone}  />
                    </div>
                </div>
                <div className="info__data_btn">
                    <div className="info__data_btn-save" onClick={()=> saveInfo()}>Сохранить</div>
                </div>
            </div>
        </div>
    )
}
export default PersonalInfo;
