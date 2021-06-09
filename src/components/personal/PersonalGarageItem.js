import React from 'react';
function PersonalGarageItem(props){
    return(
      <div className="personal-garage__list_item">
        <div className="garage-item_img">
            <img src={`/img/icon-${props.item.marka.toLowerCase()}.png`} alt="" />
        </div>
        <div className="garage-item_title">
            <span>{props.item.marka} {props.item.model}</span>
        </div>
    </div>
    )
}
export default PersonalGarageItem;
