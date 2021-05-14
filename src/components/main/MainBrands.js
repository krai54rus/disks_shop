import React, { useEffect, useState } from 'react';
// import {
//     Link,
//   } from "react-router-dom";
function MainBrands(props){
    const [brandsArr,setBrands] = useState([]);
    useEffect(() => {
        console.log('brands effect');
        if (brandsArr.length === 0) {
            fetch('./brandsmain.json')
            .then(res=>res.json())
            .then(res=>{
                setBrands(res);
                //console.log('disk',diskArr.length);
            });
        };
    })
    return (
        <div className="main-brands">
            <div className="container">
            <div className="main-brands-wrap">
                <div className="main-brands__title">
                    <span className="main-brands__title-top">Наши бренды</span>
                    {/* <Link to="/catalog" className="main-brands__title-link" >
                        <span>Перейти в каталог</span>
                    </Link> */}
                </div>
                <div className="main-brands__list">
                    {
                        brandsArr.length > 0 &&
                        brandsArr.map((item,index)=>
                            <div key={index} className="main-brands__list_item">
                                <div className="main-brands__list_item-img">
                                    <img src={`./img/${item.img}`} alt=""/>
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
export default MainBrands;
