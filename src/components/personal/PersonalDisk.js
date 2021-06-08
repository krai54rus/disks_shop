import React from 'react';
function PersonalDisk(props){
    return(
        // <div className="favourite__disks-wrap">
            <div className="favourite__disks-item">
                <div className="personal-disk-delete">
                    <img src="/img/close.svg" alt="" />
                </div>
                <div className="favourite__disks-item_top">
                    <div className="favourite__disks-item_top_img">
                        <img src={`/img/${props.item.img}`} alt="" />
                    </div>
                </div>
                <div className="favourite__disks-item_bottom">
                    <span>{props.item.name}</span>
                </div>
            </div>
        // </div>
    )
}
export default PersonalDisk;
