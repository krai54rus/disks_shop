import React, { useEffect, useState } from 'react';
import config from "../../config";
function PersonalGarage(){
    const [garArr, setGarage] = useState([]);
    useEffect(() => {
        if (!garArr.length) {
            fetch(`${config.apiUrl}/personal/garage`)
            .then(res=>res.json())
            .then(res=>{
                setGarage(res);
                return res;
            });
        }
    });
    return(
        <div className="personal-garage">
            <div className="personal-garage__title">
                <h1>Гараж</h1>
            </div>
            <div className="personal-garage__list">
                <div className="personal-garage__list_item">
                    <div className="garage-item_img">
                        <img src="/img/icon-bmw.png" alt="" />
                    </div>
                    <div className="garage-item_title">
                        <span>BMW x5</span>
                    </div>
                </div>
                <div className="personal-garage__list_item">
                    <div className="garage-item_img">
                        <img src="/img/icon-mercedes.png" alt="" />
                    </div>
                    <div className="garage-item_title">
                        <span>Mercedes E-class</span>
                    </div>
                </div>
                <div className="personal-garage__list_item">
                    <div className="garage-item_img">
                        <img src="/img/icon-mazda.png" alt="" />
                    </div>
                    <div className="garage-item_title">
                        <span>Mazda 6</span>
                    </div>
                </div>
                <div className="personal-garage__list_item">
                    <div className="garage-item_img">
                        <img src="/img/icon-toyota.png" alt="" />
                    </div>
                    <div className="garage-item_title">
                        <span>Toyota Land Cruiser</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalGarage;