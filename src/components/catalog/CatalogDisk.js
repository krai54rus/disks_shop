import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';
function CatalogDisk(props){
    const dispatch = useDispatch();
    const [favorite, setfavorite] = useState(false);
    function addFavorite(){
        if (favorite) {
            setfavorite(false);
        }else{
            setfavorite(true);
        }
    }
    function cartAdd() {
        console.log(props);
        const prodInfo = {
            code: props.code,
            count: 1,
        };
        dispatch(addToCart(prodInfo));
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
                <div className="catalog-disks__list_item-buy">
                    <div className="catalog-disks__list_item-price">
                        <span>{props.item.price} Р</span>
                    </div>
                    <div className="catalog-disks__list_item-cart" onClick={()=>cartAdd()}>
                        {/* <span>В корзину</span> */}
                        <img src="/img/shopping-cart-white.svg" alt="" />
                    </div>
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
