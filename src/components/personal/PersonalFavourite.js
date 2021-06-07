import React, { useEffect, useState } from 'react';
import PersonalDisk from './PersonalDisk';
import config from "../../config";
function PersonalFavourite(){
    const [diskArr, setDisk] = useState([]);
    useEffect(() => {
        if (!diskArr.length) {
            fetch(`${config.apiUrl}/personal/disks`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                setDisk(res);
                return res;
            });
        }
    }, []);
    return(
        <div className="personal-favourite">
            <div className="personal-favourite__title">
                <h1>Избранные диски</h1>
            </div>
            <div className="personal-favourite__slider">
                <div className="personal-favourite__disks">
                    <div className="personal-favourite__disks_list">
                        {
                            diskArr.map((item,index)=>
                                <PersonalDisk key={index} item={item}/>
                            )
                        }
                    </div>
                </div>
                <div className="personal-slider-arrow slider-arrow-left">
                    <img src="/img/right-arrow-small.svg" alt="" />
                </div>
                <div className="personal-slider-arrow slider-arrow-right">
                    <img src="/img/right-arrow-small.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default PersonalFavourite;
