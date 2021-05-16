import React, { useState } from 'react';
import ConstructorFilter from '../constructor/ConstructorFilter';
import ConstructorPicture from '../constructor/ConstructorPicture';
import ConstructorDisks from '../constructor/ConstructorDisks';
function ConstructorPage(){ 
    const [diskArr,setDisk] = useState([
        {"name":"disk1","constrImg":"constr-disk4.png","price":"5420"},
        {"name":"disk2","constrImg":"constr-disk1.png","price":"3700"},
        {"name":"disk3","constrImg":"constr-disk2.png","price":"4400"},
        {"name":"disk4","constrImg":"constr-disk3.png","price":"6700"},
        {"name":"disk1","constrImg":"constr-disk4.png","price":"4800"},
        {"name":"disk2","constrImg":"constr-disk1.png","price":"9000"},
        {"name":"disk3","constrImg":"constr-disk2.png","price":"5000"},
        {"name":"disk4","constrImg":"constr-disk3.png","price":"6400"}
    ]);
    const [diskApp,setDiskApp] = useState({});
    const [pictureModel,setPicModel] = useState({});
    function diskApply(disk){
        console.log(disk);
        setDiskApp(disk);
    }
    function setPicture(modelObj){
        setPicModel(modelObj);
    }
    return(
        <div className="constructor-page">
            <div className="container">
                <div className="constructor-wrapper">
                    <div className="constructor-wrapper-auto">
                        <ConstructorFilter setPicture={setPicture} />
                        <ConstructorPicture pictureModel={pictureModel} disk={diskApp}/>
                    </div>
                    <div className="constructor-wrapper-disks">
                        <ConstructorDisks disks={diskArr} pickDisk={diskApply}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConstructorPage;
