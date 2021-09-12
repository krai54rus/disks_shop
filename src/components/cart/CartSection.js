import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
function CartSection(props){
    const cart = useSelector(state => state.cart);
    const disks = useSelector(state => state.disks);
    const [diskArr,setDisks] = useState([]);
    useEffect(()=>{
      if (!cart.pending && cart.items && cart.items.length && disks.items && disks.items.length && !diskArr.length) {
        const allDisks = [];
        cart.items.forEach(cartDisk => {
          console.log('cartDisk ', cartDisk);
          console.log('disks ', disks.items);
          const findRes = disks.items.find((diskItem)=> diskItem.code == cartDisk.code);
          console.log(findRes);
          if (findRes) {
            allDisks.push(findRes);
          }
          setDisks(allDisks);
        });
      }
      // console.log('cart',cart);
      // console.log('disks',disks);
    })
    return (
        <div className="cart-section">
                <div className="cart-disks__title">
                    <h1 className="cart-disks__title-text">Корзина</h1>
                </div>
                <div className="cart-disks__list">
                    {
                      diskArr.length > 0 &&
                      diskArr.map((cartItem,index) =>
                      <CartItem key={index} item={cartItem}></CartItem>
                      )
                    }
                    {
                      !diskArr.length &&
                      <div>Ваша корзина пустая</div>
                    }
                </div>
            </div>
    );
}
export default CartSection;
