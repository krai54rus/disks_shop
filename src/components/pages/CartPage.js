import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartSection from '../cart/CartSection';
function CartPage(){
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
    return(
        <div className="cart-page">
            <div className="container">
            
            {
                  diskArr.length > 0 ?
                  <CartSection></CartSection>
                  :
                  <div>Ваша корзина пустая</div>
                }
            </div>
        </div>
    )
}
export default CartPage;
