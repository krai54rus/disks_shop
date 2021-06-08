import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import MainPage from './pages/MainPage.js';
import CatalogPage from './pages/CatalogPage.js';
import ConstructorPage from './pages/ConstructorPage.js';
import PersonalPage from './pages/PersonalPage.js';
import Page404 from './pages/Page404';
function Content(){
    return(
        <div className="content-wrapper">
            <Switch>
                <Route exact path="/">
                    <MainPage />
                </Route>
                <Route exact path="/catalog">
                    <CatalogPage />
                </Route>
                <Route exact path="/constructor/:marka?/:model?">
                    <ConstructorPage />
                </Route>
                <Route exact path="/personal">
                    <PersonalPage />
                </Route>
                <Route component={Page404} />
            </Switch>
        </div>
    )
}
export default Content;