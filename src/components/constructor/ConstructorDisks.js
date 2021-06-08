import React from 'react';
import ConstructorDiskItem from './ConstructorDiskItem';
function ConstructorDisks(props){
    return (
        <div className="constr-section">
                <div className="constr-disks__top">
                    {/* <h1 className="constr-disks__top-text">Диски</h1> */}
                    <span className="constr-disks__top-count">Дисков найдено: {props.disks.length}</span>
                </div>
                <div className="constr-disks__list">
                    {
                        props.disks.length > 0 &&
                        props.disks.map((item,index)=>
                            <ConstructorDiskItem pickDisk={props.pickDisk} key={index} item={item} />
                        )
                    }
                </div>
            </div>
    );
}
export default ConstructorDisks;
