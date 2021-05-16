import React from 'react';
function ConstructorDiskItem(props){
    // function diskApply(item){
    //     console.log(item);
    // }
    // useEffect(() => {
    //     console.log(props);
    // });
    return (
            <div className="constr-disks__list_item" onClick={()=>props.pickDisk(props.item)}>
                <div className="constr-disks__list_item-top">
                    <div className="constr-disks__list_item-img">
                        <img src={`./img/${props.item.name}.png`} alt=""/>
                    </div>
                </div>

                <div className="constr-disks__list_item-bottom">
                    <div className="constr-disks__list_item-name">
                        <span>{ props.item.name }</span>
                    </div>
                    <div className="constr-disks__list_item-price">
                        <span>{props.item.price} Р</span>
                    </div>
                </div>
            </div>
    );
}
export default ConstructorDiskItem;
