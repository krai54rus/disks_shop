import React, { useEffect, useState } from 'react';
import ConstructorFilter from '../constructor/ConstructorFilter';
import ConstructorPicture from '../constructor/ConstructorPicture';
import ConstructorDisks from '../constructor/ConstructorDisks';
import CatalogFilterMobile from '../catalog/CatalogFilterMobile';
import config from '../../config';
import { useParams } from 'react-router';
function ConstructorPage(){ 
    const [diskArr,setDisk] = useState([]);
    const [diskApp,setDiskApp] = useState({});
    //Параметры URL
    let { marka, model } = useParams();
    const [pictureModel,setPicModel] = useState({});
    function diskApply(disk){
        console.log(disk);
        setDiskApp(disk);
    }
    function setPicture(modelObj){
        console.log(modelObj);
        console.log(marka);
        setPicModel(modelObj);
        // fetch(`${config.apiUrl}/constructor/${}`)
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res);
        // })
    }
    const [showFilter,toggleFilter] = useState(false);
    function toggleFilterFunc(show = false) {
        toggleFilter(show);
    }
    function searchDisks(){
        fetch(`${config.apiUrl}/constructor?marka=${marka}&model=${model}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setDisk(res);
            return res;
        });
    }
    useEffect(()=>{
        if (!diskArr.length && marka && model) {
            searchDisks();
        }
    })
    return(
        <div className="constructor-page">
            <div className="container">
                <div className="constructor-wrapper">
                    <div className="constructor-wrapper-auto">
                        <CatalogFilterMobile showFilter={showFilter} toggleFilter={toggleFilterFunc} />
                        <ConstructorFilter showFilter={showFilter} toggleFilter={toggleFilterFunc} setPicture={setPicture} />
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
