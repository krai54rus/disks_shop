import React, { useEffect, useState } from 'react';
import PersonalDisk from './PersonalDisk';
import config from "../../config";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function PersonalFavourite(){
    const [diskArr, setDisk] = useState([]);
    const personal = useSelector(state => state.personal);
    useEffect(() => {
        console.log(personal);
        if (!diskArr.length && personal.disks && personal.disks.length) {
            setDisk(personal.disks);
        }
    },[personal.disks.length]);
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
