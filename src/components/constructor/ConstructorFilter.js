import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import FilterAuto from '../catalog/filter/FilterAuto';
function ConstructorFilter(props){
    const [markArr,setMarks] = useState([]);
    const [modelsArr,setModels] = useState([]);
    const [currModel,setCurModel] = useState({});
    let { marka, model } = useParams();
    let location = useLocation();
    useEffect(() => {
        if (markArr.length === 0) {
            fetch('/auto.json')
            .then(res=>res.json())
            .then(res=>{
                setMarks(res);
            });
        }else{
            if (marka && markArr.length && modelsArr.length === 0) {
                console.log('useEff pick mark');
                console.log(location);
                pickMark(marka);
            }
            if (model && modelsArr.length && Object.keys(currModel).length === 0) {
                console.log('useEff pick model');
                pickModel(model);
            }
        }
    })
    function pickMark(name){
        let pickArr = markArr.filter(markaArr => markaArr.name === name);
        setModels(pickArr[0].models);
    }
    function pickModel(name){
        let pickModel = modelsArr.filter(model => model.name === name);
        setCurModel(pickModel[0]);
        // if (currModel) {
        props.setPicture(pickModel[0]);
        props.toggleFilter(false);
        // }
    }
    function sbrosFilter (){
        setCurModel({});
        setModels([]);
    }
    return (
        <div className={`catalog-filter ${props.showFilter ? "filter-show" : ""}`}>
            <div className="catalog-filer__overlay" onClick={() => props.toggleFilter(false)}></div>
            <div className="catalog-filter__list">
                <div className="catalog-filter__list-section">
                    <div className="catalog-filter__list-section_title">
                        <span>По автомобилю</span>
                    </div>
                    <FilterAuto name="Марка" item={markArr} pickFunction={pickMark}/>
                    <FilterAuto name="Модель" item={modelsArr} pickFunction={pickModel}/>

                    <div className="catalog-filter__list-section_btn">
                        <div className="filter-btn" onClick={() => sbrosFilter()}>Сбросить</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConstructorFilter;
