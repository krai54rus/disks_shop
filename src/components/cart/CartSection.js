import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartItemList from './CartItemList';
import CartDelivery from './CartDelivery';
import CartPersonal from './CartPersonal';
import CartTotal from './CartTotal';
function CartSection(props){
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
      // console.log('cart',cart);
      // console.log('disks',disks);
    // })
    return (
        <div className="cart-section">
            <div className="cart-section__title">
                <h1 className="cart-section__title-text">Корзина</h1>
            </div>
                {
                  props.disks.length > 0 ?
                  <div className="cart-section__wrapper">
                    <div className="cart-section__content">
                      <CartItemList disks={props.disks} />
                      <CartDelivery />
                      <CartPersonal />
                    </div>
                    <div className="cart-section__total">
                      <CartTotal />
                    </div>
                  </div>
                  :
                  <div className="cart-section__no-content">Ваша корзина пустая</div>
                }
        </div>
    );
}
export default CartSection;
