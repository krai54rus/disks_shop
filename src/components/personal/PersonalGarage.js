import React, { useEffect, useState } from 'react';
import PersonalGarageItem from './PersonalGarageItem';
import { Link } from 'react-router-dom';
import config from "../../config";
function PersonalGarage(){
    const [garArr, setGarage] = useState([]);
    useEffect(() => {
        if (!garArr.length) {
            const userLogin = document.cookie.match(/login=(.+?)(;|$)/);
            fetch(`${config.apiUrl}/personal/garage?login=${userLogin[1]}`)
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
                {
                    garArr.length > 0 &&
                    garArr.map((item,index)=>
                        <PersonalGarageItem key={index} item={item}/>
                    )
                }
                {
                    garArr.length == 0 &&
                    <div className="no-disks">
                        <span>Нет сохраненных подборок. Их можно добавить из <Link to="/constructor">конструктора</Link></span>
                    </div>
                }
                {/* <div className="personal-garage__list_item">
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
                </div> */}
            </div>
        </div>
    )
}
export default PersonalGarage;
