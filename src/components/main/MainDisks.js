import React, { useEffect, useState } from 'react';
import config from '../../config';
import {
    Link,
  } from "react-router-dom";
function MainDisks(props){
    const [diskArr,getDisks] = useState([]);
    useEffect(() => {
        if (diskArr.length === 0) {
            // fetch(`${config.apiUrl}/disks/top`)
            // fetch('./disksmain.json')
            fetch(`${config.apiUrl}/main/disks`)
            .then(res=>res.json())
            .then(res=>{
                getDisks(res);
            });
        };
    })
    return (
        <div className="main-disks">
            <div className="container">
            <div className="main-disks-wrap">
                <div className="main-disks__title">
                    <span className="main-disks__title-top">Топ дисков</span>
                    <Link to="/catalog" className="main-disks__title-link" >
                        <span>Перейти в каталог</span>
                        <img src="./img/right-arrow.svg" alt="" />
                    </Link>
                </div>
                <div className="main-disks__list">
                    {
                        diskArr.length > 0 &&
                        diskArr.map((item,index)=>
                            <div key={index} className="main-disks__list_item">
                                <div className="main-disks__list_item-img">
                                    <img src={`./img/${item.img}`} alt=""/>
                                </div>
                                <div className="main-disks__list_item-text">
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            </div>
        </div>
    );
}
export default MainDisks;
