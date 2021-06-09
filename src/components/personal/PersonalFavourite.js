import React, { useEffect, useState } from 'react';
import PersonalDisk from './PersonalDisk';
import config from "../../config";
import { Link } from 'react-router-dom';
function PersonalFavourite(){
    const [diskArr, setDisk] = useState([]);
    useEffect(() => {
        if (!diskArr.length) {
            const userLogin = document.cookie.match(/login=(.+?)(;|$)/);
            fetch(`${config.apiUrl}/personal/disks?login=${userLogin[1]}`)
            .then(res=>res.json())
            .then(res=>{
                setDisk(res);
                return res;
            });
        }
    });
    // const diskList = useRef(null);
    // function toLeft(){
    //     let diskItem = document.querySelectorAll('.favourite__disks-wrap')[0];
    //     let diskW = window.getComputedStyle(diskItem);
    //     let diskListTr = window.getComputedStyle(diskList.current).transform;
    //     console.log(diskW);
    //     console.log(diskListTr);
    //     diskList.current.style.transform = `translateX(212px)`;
    // }
    // function toRight(){
    //     let diskItem = document.querySelectorAll('.favourite__disks-wrap')[0];
    //     let diskW = window.getComputedStyle(diskItem).width;
    //     let diskListTr = window.getComputedStyle(diskList.current);
    //     console.log(diskW);
    //     // console.log(diskW);
    //     console.log(diskListTr);
    //     diskList.current.style.transform = `translateX(-212px)`;
    // }
    return(
        <div className="personal-favourite">
            <div className="personal-favourite__title">
                <h1>Избранные диски</h1>
            </div>
            <div className="personal-favourite__slider">
                <div className="personal-favourite__disks">
                    <div className="personal-favourite__disks_list">
                        {
                            diskArr.length > 0 &&
                            diskArr.map((item,index)=>
                                <PersonalDisk key={index} item={item}/>
                            )
                        }
                        {
                            diskArr.length == 0 &&
                            <div className="no-disks">
                                <span>Нет избранных дисков. Их можно добавить из <Link to="/catalog">каталога</Link></span>
                            </div>
                        }
                    </div>
                </div>
                {/* <div className="personal-slider-arrow slider-arrow-left" onClick={()=> toLeft()}>
                    <img src="/img/right-arrow-small.svg" alt="" />
                </div>
                <div className="personal-slider-arrow slider-arrow-right" onClick={()=> toRight()}>
                    <img src="/img/right-arrow-small.svg" alt="" />
                </div> */}
            </div>
        </div>
    )
}
export default PersonalFavourite;
