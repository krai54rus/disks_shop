import React from 'react';
import {
    Link,
    Switch,
    Route,
} from "react-router-dom";
import PersonalInfo from '../personal/PersonalInfo';
import PersonalGarage from '../personal/PersonalGarage';
import PersonalFavourite from '../personal/PersonalFavourite';
function PersonalPage(){
    return(
        <div className="personal-page">
            <div className="container">
                <div className="personal-wrapper">
                    <div className="personal-left">
                        <PersonalInfo />
                    </div>
                    <div className="personal-right">
                        <PersonalFavourite />
                        <PersonalGarage />
                    </div>
                    {/* <div className="personal__sidebar">
                        <div className="personal__sidebar_link">
                            <Link to="/personal">Личная информация</Link>
                        </div>
                        <div className="personal__sidebar_link">
                            <Link to="/personal/garage">Гараж</Link>
                        </div>
                        <div className="personal__sidebar_link">
                            <Link to="/personal/favourite">Избранные диски</Link>
                        </div>
                    </div>
                    <div className="personal__content">
                    <Switch>
                        <Route exact path="/personal">
                            <PersonalInfo />
                        </Route>
                        <Route path="/personal/garage">
                            <PersonalGarage />
                        </Route>
                        <Route path="/personal/favourite">
                            <PersonalFavourite />
                        </Route>
                    </Switch>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default PersonalPage;
