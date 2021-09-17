import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function CartTotal(props){
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
        <div className="cart-total">
            <div className="cart-total__button">
                <div className="cart-button button">Оформить заказ</div>
            </div>
            <div className="cart-total__price">
                <div className="cart-price">
                    <span>15470 руб.</span>
                </div>
            </div>
        </div>
    );
}
export default CartTotal;
