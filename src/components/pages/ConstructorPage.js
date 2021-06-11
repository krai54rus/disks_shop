import React, { useEffect, useState } from 'react';
import ConstructorFilter from '../constructor/ConstructorFilter';
import ConstructorPicture from '../constructor/ConstructorPicture';
import ConstructorDisks from '../constructor/ConstructorDisks';
import CatalogFilterMobile from '../catalog/CatalogFilterMobile';
import config from '../../config';
import { useParams } from 'react-router';
function ConstructorPage(){
    // Текущие марка и модель
    const [currAuto,setCurrAuto] = useState({});
    // Диски модели
    const [diskArr,setDisk] = useState([]);
    // Применяемый диск
    const [diskApp,setDiskApp] = useState({});
    //Параметры URL
    let { marka, model } = useParams();
    const [pictureModel,setPicModel] = useState({});
    function diskApply(disk){
        // console.log(disk);
        setDiskApp(disk);
    }
    function setPicture(modelObj){
        setPicModel(modelObj);
    }
    const [showFilter,toggleFilter] = useState(false);
    function toggleFilterFunc(show = false) {
        toggleFilter(show);
    }
    function searchDisks(searchMark,searchModel){
        fetch(`${config.apiUrl}/constructor?marka=${searchMark}&model=${searchModel}`)
        .then(res=>res.json())
        .then(res=>{
            setDisk(res);
            return res;
        });
    }
    function currAutoFunc(marka,model) {
        const auto = {
            marka,
            model
        }
        setCurrAuto(auto);
        // return `${marka} ${model}`;
    }
    useEffect(()=>{
        if (!diskArr.length && marka && model && window.location.pathname !== "/constructor") {
            searchDisks(marka,model);
        }
    })
    return(
        <div className="constructor-page">
            <div className="container">
                <div className="constructor-wrapper">
                    <div className="constructor-wrapper-auto">
                        <CatalogFilterMobile showFilter={showFilter} toggleFilter={toggleFilterFunc} />
                        <ConstructorFilter
                            currAutoFunc={currAutoFunc}
                            pickDisk={diskApply}
                            setDisk={setDisk}
                            searchDisks={searchDisks}
                            showFilter={showFilter}
                            toggleFilter={toggleFilterFunc}
                            setPicture={setPicture}
                        />
                        <ConstructorPicture currAuto={currAuto} pictureModel={pictureModel} disk={diskApp}/>
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
