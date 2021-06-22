import React, { useEffect, useState } from 'react';
import PersonalInfo from '../personal/PersonalInfo';
import PersonalGarage from '../personal/PersonalGarage';
import PersonalFavourite from '../personal/PersonalFavourite';
import PersonalAuth from '../personal/PersonalAuth';
import config from "../../config";
function PersonalPage(){
    const [isAuth, setAuth] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        if (!isAuth) {
            const isAuthCooke = document.cookie.match(/isAuth=(.+?)(;|$)/);
            const userLogin = document.cookie.match(/login=(.+?)(;|$)/);
            if (isAuthCooke && isAuthCooke.length && isAuthCooke[1] === 'auth') {
                if (userInfo.length === 0 && userLogin && userLogin.length) {
                    fetch(`${config.apiUrl}/personal/info?login=${userLogin[1]}`)
                    .then(res=>res.json())
                    .then(res=>{
                        if (res.status == "OK") {
                            setUserInfo(res.result);
                        }
                        return res;
                    });
                    setAuth(true);
                }
            }
        }
    });
    return(
        <div className="personal-page">
            <div className="container">
                <div className="personal-wrapper">
                    {
                        isAuth
                        ?   <div className="personal-wrapper-info">
                                <div className="personal-left">
                                    <PersonalInfo userInfo={userInfo} />
                                </div>
                                <div className="personal-right">
                                    <PersonalFavourite />
                                    <PersonalGarage />
                                </div>
                            </div>
                        : <div className="personal-wrapper-auth">
                            <PersonalAuth setUserInfo={setUserInfo} setAuth={setAuth} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default PersonalPage;
