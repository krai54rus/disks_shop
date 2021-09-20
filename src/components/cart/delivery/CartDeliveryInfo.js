import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FromInput from '../../generic/FormInput';
function CartDeliveryInfo(props){
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
        <div className="cart-delivery-info">
            <div className="cart-delivery-info__title">
              <span>Доставка</span>
            </div>
            <div className="cart-delivery-info__wrapper">
                <div className="cart-delivery-info__form">
                    {/* <div className={`cart-input ${ clicked ? 'cart-input-active' : ''}`} onClick={() => animateCartInput()}>
                        <span className="cart-input__label">Фамилия, имя и отчество</span>
                        <div className="cart-input__placeholder">
                            <span>Иванов Иван Иванович</span>
                        </div>
                        <input onClick={() => clickInput()} type="text" defaultValue=""/>
                    </div> */}
                    <FromInput label="Город" placeholder="Москва"></FromInput>
                    <FromInput label="Улица" placeholder="ул. Ленина"></FromInput>
                    <FromInput label="Дом" placeholder="155"></FromInput>
                    <FromInput label="Квартира" placeholder="155"></FromInput>
                    <FromInput label="Этаж" placeholder="3"></FromInput>
                    {/* <div className="cart-input">
                        <span className="cart-input__label">Мобильный телефон</span>
                        <input type="text" defaultValue="" placeholder="+7 (913) 911-99-19"/>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
export default CartDeliveryInfo;
