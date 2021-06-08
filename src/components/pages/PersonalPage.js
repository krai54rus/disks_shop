import React, { useEffect, useState } from 'react';
import PersonalInfo from '../personal/PersonalInfo';
import PersonalGarage from '../personal/PersonalGarage';
import PersonalFavourite from '../personal/PersonalFavourite';
import PersonalAuth from '../personal/PersonalAuth';
function PersonalPage(){
    const [isAuth, setAuth] = useState(false);
    useEffect(() => {
        if (!isAuth) {
            const isAuthCooke = document.cookie.match(/isAuth=(.+?)(;|$)/);
            if (isAuthCooke && isAuthCooke.length && isAuthCooke[1] === 'auth') {
                setAuth(true);
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
                                    <PersonalInfo />
                                </div>
                                <div className="personal-right">
                                    <PersonalFavourite />
                                    <PersonalGarage />
                                </div>
                            </div>
                        : <div className="personal-wrapper-auth">
                            <PersonalAuth setAuth={setAuth} />    
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default PersonalPage;
