import React, { useEffect, useState } from 'react';
import PersonalInfo from '../personal/PersonalInfo';
import PersonalGarage from '../personal/PersonalGarage';
import PersonalFavourite from '../personal/PersonalFavourite';
import PersonalAuth from '../personal/PersonalAuth';
import config from "../../config";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../../store/actions/personalActions';
function PersonalPage(){
    const dispatch = useDispatch();
    const [cookies, setCookie] = useCookies(['isAuth','login']);
    const [isAuth, setAuth] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const personal = useSelector(state => state.personal);
    useEffect(() => {
        // console.log('personalPage ', personal);
        // if (personal.isAuth === '' && !personal.pending) {
        //     dispatch(checkAuth());
        // }
        // if (personal.isAuth === true && personal.login) {
        //     console.log('пихаю данные ', personal);
        //     setUserInfo(personal);
        //     setAuth(true);
        // }
        // if (!isAuth) {
        //     console.log('cookie ', cookies);
        //     const isAuthCooke = document.cookie.match(/isAuth=(.+?)(;|$)/);
        //     const userLogin = document.cookie.match(/login=(.+?)(;|$)/);
        //     if (isAuthCooke && isAuthCooke.length && isAuthCooke[1] === 'auth') {
        //         if (userInfo.length === 0 && userLogin && userLogin.length) {
        //             fetch(`${config.apiUrl}/personal/info?login=${userLogin[1]}`)
        //             .then(res=>res.json())
        //             .then(res=>{
        //                 if (res.status == "OK") {
        //                     setUserInfo(res.result);
        //                 }
        //                 return res;
        //             });
        //             setAuth(true);
        //         }
        //     }
        // }
    });
    return(
        <div className="personal-page">
            <div className="container">
                <div className="personal-wrapper">
                    {
                        personal.isAuth
                        ?   <div className="personal-wrapper-info">
                                <div className="personal-left">
                                    <PersonalInfo userInfo={personal} />
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
