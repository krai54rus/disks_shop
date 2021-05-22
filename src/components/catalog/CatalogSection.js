import React from 'react';
function CatalogSection(props){
    return (
        <div className="catalog-section">
                <div className="catalog-disks__title">
                    <h1 className="catalog-disks__title-text">Диски</h1>
                    <span className="catalog-disks__title-count">Найдено: {props.disks.length}</span>
                </div>
                <div className="catalog-disks__list">
                    {
                        props.disks.length > 0 &&
                        props.disks.map((item,index)=>
                            <div key={index} className="catalog-disks__list_item">
                                <div className="catalog-disks__list_item-top">
                                    <div className="catalog-disks__list_item-img">
                                        <img src={`/img/${item.name}.png`} alt=""/>
                                    </div>
                                    <div className="catalog-disks__list_item-name">
                                        <span>{ item.name }</span>
                                    </div>
                                </div>

                                <div className="catalog-disks__list_item-bottom">
                                    <div className="catalog-item__param catalog-disks__list_item-size">
                                        <span>Диаметр: </span>
                                        <span>17/4</span>
                                    </div>
                                    <div className="catalog-item__param catalog-disks__list_item-vil">
                                        <span>Вылет (ET): </span>
                                        <span>46</span>
                                    </div>
                                    <div className="catalog-item__param catalog-disks__list_item-vil">
                                        <span>DIA: </span>
                                        <span>106</span>
                                    </div>
                                    <div className="catalog-disks__list_item-price">
                                        <span>7350 Р</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
    );
}
export default CatalogSection;
