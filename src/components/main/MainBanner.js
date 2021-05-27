import React, { useEffect } from 'react';
function MainBanner(){
    useEffect(() => {
        console.log('banner effect');
    })
    return (
        <div className="main-banner">
            <div className="main-banner__container">
                <div className="main-banner__img">
                    <img src="./img/banner1.jpg" className="" alt="" />
                </div>
            </div>
        </div>
    );
}
export default MainBanner;
