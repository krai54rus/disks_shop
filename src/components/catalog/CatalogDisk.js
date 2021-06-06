import React, { useState } from 'react';
function CatalogDisk(props){
    const [favorite, setfavorite] = useState(false);
    function addFavorite(){
        if (favorite) {
            setfavorite(false);
        }else{
            setfavorite(true);
        }
    }
    return (
        <div className="catalog-disks__list_item">
            <div className="catalog-disks__list_item-top">
                <div className="catalog-disks__list_item-img">
                    <img src={`/img/${props.item.img}`} alt=""/>
                </div>
                <div className="catalog-disks__list_item-name">
                    <span>{ props.item.name }</span>
                </div>
            </div>

            <div className="catalog-disks__list_item-bottom">
                <div className="catalog-item__param catalog-disks__list_item-size">
                    <span>Диаметр: </span>
                    <span>{props.item.size}</span>
                </div>
                <div className="catalog-item__param catalog-disks__list_item-vil">
                    <span>Вылет (ET): </span>
                    <span>{props.item.ET}</span>
                </div>
                <div className="catalog-item__param catalog-disks__list_item-vil">
                    <span>DIA: </span>
                    <span>{props.item.DIA}</span>
                </div>
                <div className="catalog-disks__list_item-price">
                    <span>{props.item.price} Р</span>
                </div>
            </div>
            <div className="disk-favorite">
                {
                    favorite 
                    ? <img onClick={()=> addFavorite()} src="/img/heart.svg" alt="" />
                    : <img onClick={()=> addFavorite()} src="/img/heart-gray.svg" alt="" /> 
                }
                
            </div>
        </div>
    );
}
export default CatalogDisk;