import React, { useState } from 'react';
import PersonalInfo from '../personal/PersonalInfo';
import PersonalGarage from '../personal/PersonalGarage';
import PersonalFavourite from '../personal/PersonalFavourite';
import PersonalAuth from '../personal/PersonalAuth';
function PersonalPage(){
    const [isAuth, setAuth] = useState(false);
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
                            <PersonalAuth />    
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default PersonalPage;
