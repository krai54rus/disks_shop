import React from 'react';
import MainBanner from '../main/MainBanner';
import MainMarks from '../main/MainMarks';
import MainDisks from '../main/MainDisks';
function MainPage(){
    return(
        <div className="main-page">
            <MainBanner />
            <MainMarks />
            <MainDisks />
            <div>
                <div className="container">
                    <div className="main-img">
                        <img src="/img/cars-main.png" alt="" />
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default MainPage;
