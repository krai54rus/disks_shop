import React, { useEffect } from 'react';
function MainBanner(){
    useEffect(() => {
        console.log('banner effect');
    })
    return (
        <div className="main-banner">
            <div className="main-banner__container">
                <div className="main-banner__text">
                    <span>Интернет-подбор дисков</span>
                    <h2>HOT WHEELS</h2>
                    <span>
                        На сегодняшний день литые диски являются абсолютными бестселлерами у покупателей. 
                        Это не просто дань моде и элемент автодизайна, они имеют ряд преимуществ, таких как доступная цена, малый вес, улучшение управляемости автомобиля. 
                        Линейка дизайнов колес очень универсальна и разнообразна, подойдет для любого автомобиля.
                    </span>
                </div>
                <div className="main-banner__img">
                    <img src="./img/banner1.jpg" className="" alt="" />
                </div>
            </div>
        </div>
    );
}
export default MainBanner;
