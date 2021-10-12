import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
function FromInput(props){
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
    const [clicked, setClick] = useState(false);
    function animateCartInput() {
        if (clicked) {
            setClick(false);
        }else{
            setClick(true);
        }
    }
    function clickInput(e){
        console.log(e);
    }
    return (
      <div className={`cart-input ${ clicked ? 'cart-input-active' : ''}`} onClick={() => animateCartInput()}>
          <span className="cart-input__label">{props.label}</span>
          <div className="cart-input__placeholder">
              <span>{props.placeholder}</span>
          </div>
          <input onClick={() => clickInput()} type="text" defaultValue=""/>
      </div>
    );
}
export default FromInput;
