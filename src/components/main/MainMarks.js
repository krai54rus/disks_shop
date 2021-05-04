import React from 'react';
function MainMarks(props){
    return (
        <div className="main-marks">
            <div className="main-marks__title">
                <span>Диски для популярных моделей</span>
            </div>
                <div className="main-marks__list">
                    {
                        props.marks.length > 0 &&
                        props.marks.map((item,index)=>
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
    );
}
export default MainMarks;