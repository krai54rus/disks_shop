import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function CartItem(props){
    // const cart = useSelector(state => state.cart);
    // const disks = useSelector(state => state.disks);
    // const [diskArr,setDisks] = useState([]);
    // useEffect(()=>{
    //   if (!cart.pending && cart.items && cart.items.length && disks.items && disks.items.length && !diskArr.length) {
    //     const allDisks = [];
    //     cart.items.forEach(cartDisk => {
    //       console.log('cartDisk ', cartDisk);
    //       console.log('disks ', disks.items);
    //       const findRes = disks.items.find((diskItem)=> diskItem.code == cartDisk.code);
    //       console.log(findRes);
    //       if (findRes) {
    //         allDisks.push(findRes);
    //       }
    //       setDisks(allDisks);
    //     });
    //   }
    //   // console.log('cart',cart);
    //   // console.log('disks',disks);
    // })
    return (
        <div className="cart-item">
            <div className="cart-item__card">
                <div className="cart-item__card__img">
                    <img src={`./img/${props.item.img}`} alt="" />
                </div>
                <div className="cart-item__card__info">
                    <div className="cart-item__card__info-name">
                        <span>{props.item.name}</span>
                    </div>
                    <div className="cart-item__card__info-prop__list">
                        <div className="info-prop__item">
                            <span className="info-prop__item-title">ET</span>
                            <span>{props.item.ET}</span>
                        </div>
                        <div className="info-prop__item">
                            <span className="info-prop__item-title">DIA</span>
                            <span>{props.item.DIA}</span>
                        </div>
                        <div className="info-prop__item">
                            <span className="info-prop__item-title">Диаметр</span>
                            <span>{props.item.size}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-item__counter">
                <div className="cart-item__price">
                    <div>
                        <span>{props.item.price} руб.</span>
                    </div>
                </div>
                <div className="cart-item__changer">
                    <div className="cart-item__changer-item count-item minus-count">-</div>
                    <div className="cart-item__changer-item number">4</div>
                    <div className="cart-item__changer-item count-item plus-count">+</div>
                </div>
                <div className="cart-item__total-price">
                    <span>{props.item.price * 4} руб.</span>
                </div>
            </div>
        </div>
    );
}
export default CartItem;
