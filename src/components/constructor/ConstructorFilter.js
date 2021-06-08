import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import FilterAuto from '../catalog/filter/FilterAuto';
function ConstructorFilter(props){
    //Выбранные марка,модель
    const [markArr,setMarks] = useState([]);
    const [modelsArr,setModels] = useState([]);
    const [currModel,setCurModel] = useState({});
    //Значения фильтра
    const [defaultMarka, setDefMarka] = useState('Марка');
    const [defaultModel, setDefModel] = useState('Модель');
    //Параметры URL
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
            console.log(`применяет все ${marka} ${model}`);
            console.log(window.location.pathname);
            if (window.location.pathname !== "/constructor") {
                // Если в параметрах URL'а есть марка и модель - применяет их
                if (marka && markArr.length && modelsArr.length === 0) {
                    // const markName = marka.replaceAll('-',' ');
                    // console.log(marka);
                    pickMark(marka);
                }
                if (model && modelsArr.length && Object.keys(currModel).length === 0) {
                    // const modelName = model.replaceAll('-',' ');
                    // console.log(modelName);
                    pickModel(model);
                }
            }

        }
    })
    function pickMark(name){
        //Сохраняет выбранную марку в состояние
        let pickArr = markArr.filter(markaArr => markaArr.name === name);
        setModels(pickArr[0].models);

        window.history.pushState({}, '', `/constructor/${pickArr[0].name}`);
        // Имя марки в фильтре
        setDefMarka(pickArr[0].name);
    }
    function pickModel(name){
        //Сохраняет выбранную модель в состояние
        let pickModel = modelsArr.filter(model => model.name === name);
        setCurModel(pickModel[0]);
        let modelUrl = window.location.pathname.split('/');
        window.history.pushState({}, '', `/${modelUrl[1]}/${modelUrl[2]}/${pickModel[0].name}`);
        // Имя модели в фильтре
        setDefModel(pickModel[0].name);

        // Поиск дисков по модели
        props.searchDisks(defaultMarka,pickModel[0].name);
        // Ставит img модели и закрывает фильтр
        props.setPicture(pickModel[0]);
        props.toggleFilter(false);
    }
    function sbrosFilter (){
        //Сбрасывает все на стандартные значения
        window.history.pushState({}, '', `/constructor`);
        setDefMarka('Марка');
        setDefModel('Модель');
        setCurModel({});
        setModels([]);
        props.setDisk([]);
        props.setPicture({});
        props.toggleFilter(false);
    }
    return (
        <div className={`catalog-filter ${props.showFilter ? "filter-show" : ""}`}>
            <div className="catalog-filer__overlay" onClick={() => props.toggleFilter(false)}></div>
            <div className="catalog-filter__list">
                <div className="catalog-filter__list-section">
                    <div className="catalog-filter__list-section_title">
                        <span>По автомобилю</span>
                    </div>
                    <FilterAuto filtername="Марка" name={defaultMarka} item={markArr} pickFunction={pickMark}/>
                    <FilterAuto filtername="Модель" name={defaultModel} item={modelsArr} pickFunction={pickModel}/>

                    <div className="catalog-filter__list-section_btn">
                        <div className="filter-btn" onClick={() => sbrosFilter()}>Сбросить</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ConstructorFilter;
