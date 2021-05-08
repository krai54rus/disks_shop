import React from 'react';
function CatalogSection(props){
    return (
        <div className="catalog-section">
                <div className="catalog-disks__title">
                    <span className="catalog-disks__title-text">Диски</span>
                    <span className="catalog-disks__title-count">Найдено: 20</span>
                </div>
                <div className="catalog-disks__list">
                    {
                        props.disks.length > 0 &&
                        props.disks.map((item,index)=>
                            <div key={index} className="catalog-disks__list_item">
                                <div className="catalog-disks__list_item-top">
                                    <div className="catalog-disks__list_item-img">
                                        <img src={`./img/disk1.png`} alt=""/>
                                    </div>
                                    <div className="catalog-disks__list_item-name">
                                        <span>Литые диски ОНТАРИО (КЛ216) 7.000xR17 5x114.3 DIA66.1 ET40 алмаз-белый</span>
                                    </div>
                                </div>

                                <div className="catalog-disks__list_item-bottom">
                                    <div className="catalog-disks__list_item-size">
                                        <span>Диаметр: </span>
                                        <span>17/4</span>
                                    </div>
                                    <div className="catalog-disks__list_item-vil">
                                        <span>Вылет(ET): </span>
                                        <span>46</span>
                                    </div>
                                    <div className="catalog-disks__list_item-vil">
                                        <span>DIA: </span>
                                        <span>106</span>
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