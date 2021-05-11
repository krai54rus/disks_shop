import React, { useEffect, useState } from 'react';
function MainMarks(props){
    const [markArr,getMarks] = useState([]);
    useEffect(() => {
        console.log('marks effect');
        if (markArr.length === 0) {
            fetch('./models.json')
            .then(res=>res.json())
            .then(res=>{
                getMarks(res);
                //console.log('marks',res);
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
                <div className="main-marks__list">
                    {
                        markArr.length > 0 &&
                        markArr.map((item,index)=>
                            <div key={index} className="main-marks__list_item">
                                <div className="main-marks__list_item-img">
                                    <img src={`./img/${item.img}`} alt=""/>
                                </div>
                                <div className="main-marks__list_item-text">
                                    <span>Диски для {item.name}</span>
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
export default MainMarks;
