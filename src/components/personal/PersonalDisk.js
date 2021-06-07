import React from 'react';
function PersonalDisk(props){
    return(
        <div className="favourite__disks-item">
            <div className="favourite__disks-item_top">
                <div className="favourite__disks-item_top_img">
                    <img src={`/img/${props.item.img}`} alt="" />
                </div>
            </div>
            <div className="favourite__disks-item_bottom">
                <span>{props.item.name}</span>
            </div>
        </div>
    )
}
export default PersonalDisk;