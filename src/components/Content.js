import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import MainPage from './pages/MainPage.js';
import CatalogPage from './pages/CatalogPage.js';
import ConstructorPage from './pages/ConstructorPage.js';
import PersonalPage from './pages/PersonalPage.js';
function Content(){
    return(
        <div className="content-wrapper">
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route path="/catalog/:marka?/:model?">
                    <CatalogPage />
                </Route>
                <Route path="/constructor/:marka?/:model?">
                    <ConstructorPage />
                </Route>
                <Route path="/personal">
                    <PersonalPage />
                </Route>
            </Switch>
        </div>
    )
}
export default Content;