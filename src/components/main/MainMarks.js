import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import config from '../../config';
function MainMarks(props){
    const [markArr,getMarks] = useState([]);
    useEffect(() => {
        if (markArr.length === 0) {
            // fetch(`${config.apiUrl}/auto/top`)
            fetch('./models.json')
            .then(res=>res.json())
            .then(res=>{
                getMarks(res);
            });
        };
    })
    return (
        <div className="main-marks">
            <div className="container">
            <div className="main-marks-wrap">
                <div className="main-marks__title">
                    <span>Диски для популярных моделей</span>
                </div>
                <div className="main-disks__text">
                    <span>Мы подготовили для вас лучшие подборки. получайте удовольствие от вождения!</span>
                </div>
                <div className="main-marks__list">
                    {
                        markArr.length > 0 &&
                        markArr.map((item,index)=>
                            <Link to={`constructor/${item.link}`} key={index} className="main-marks__list_item">
                                <div className="main-marks__list_item-img">
                                    <img src={`./img/${item.img}`} alt=""/>
                                </div>
                                <div className="main-marks__list_item-text">
                                    <span>Диски для {item.name}</span>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
            </div>
        </div>
    );
}
export default MainMarks;
