import React, { useEffect, useState } from 'react';
import config from '../../config';
import {
    Link,
  } from "react-router-dom";
import { useSelector } from 'react-redux';
function MainDisks(props){
    const [diskArr,getDisks] = useState([]);
    const disks = useSelector(state => state.disks);
    useEffect(() => {
        if (diskArr.length === 0 && disks.items.length) {
            const mainDisks = filterMainDisks();
            // console.log('mainDisks ', mainDisks);
            if (mainDisks && mainDisks.length) {
                getDisks(mainDisks)
            }
        };
    })
    function filterMainDisks(){
        return disks.items.filter((disk)=> disk.main === true);
    }
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
