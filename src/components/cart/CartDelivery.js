import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartDeliveryInfo from './delivery/CartDeliveryInfo';
import CartPickupInfo from './delivery/CartPickupInfo';
function CartDelivery(props){
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
        <div className="cart-delivery">
            <h2>Доставка / самовывоз</h2>
            <div className="cart-delivery__wrapper">
                <div className="cart-delivery__buttons">
                    <div className="delivery-button">
                        <span>Доставка</span>
                    </div>
                    <div className="delivery-button">
                        <span>Самовывоз</span>
                    </div>
                </div>
                <div className="cart-delivery__components">
                    <CartDeliveryInfo></CartDeliveryInfo>
                    <CartPickupInfo></CartPickupInfo>
                </div>
            </div>
        </div>
    );
}
export default CartDelivery;
