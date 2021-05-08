import React from 'react';
function MainDisks(props){
    return (
        <div className="main-disks">
            <div className="container">
            <div className="main-disks-wrap">
                <div className="main-disks__title">
                    <span className="main-disks__title-top">Топ дисков</span>
                    <span className="main-disks__title-link">Перейти в каталог -> </span>
                </div>
                <div className="main-disks__list">
                    {
                        props.disks.length > 0 &&
                        props.disks.map((item,index)=>
                            <div key={index} className="main-disks__list_item">
                                <div className="main-disks__list_item-img">
                                    <img src={`./img/${item.img}`} alt=""/>
                                </div>
                                <div className="main-disks__list_item-text">
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
export default MainDisks;