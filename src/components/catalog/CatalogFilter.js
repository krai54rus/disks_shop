import React, { useEffect, useState } from 'react';
import FilterParam from './filter/FilterParam';
import FilterAuto from './filter/FilterAuto';
function CatalogFilter(props){
    const [paramArr,setParam] = useState([
        {name:"Диаметр"},
        {name:"Вылет (ET)"},
        {name:"DIA"},
    ]);
    //Значения фильтра
    const [defaultMarka, setDefMarka] = useState('Марка');
    const [defaultModel, setDefModel] = useState('Модель');
    //Выбранные марка,модель
    const [markArr,setMarks] = useState([]);
    const [modelsArr,setModels] = useState([]);
    const [currModel,setCurModel] = useState({});

    // const [markArr,setMarks] = useState([]);
    // const [modelsArr,setModels] = useState([]);
    // const [currModel,setCurModel] = useState({});
    useEffect(() => {
        if (markArr.length === 0) {
            fetch('./auto.json')
            .then(res=>res.json())
            .then(res=>{
                setMarks(res);
            });
        };
    })

    function pickMark(name){
        //Сохраняет выбранную марку в состояние
        let pickArr = markArr.filter(markaArr => markaArr.name === name);
        setModels(pickArr[0].models);

        //window.history.pushState({}, '', `/constructor/${pickArr[0].name}`);
        // Имя марки в фильтре
        setDefMarka(pickArr[0].name);
    }
    function pickModel(name){
        //Сохраняет выбранную модель в состояние
        let pickModel = modelsArr.filter(model => model.name === name);
        setCurModel(pickModel[0]);

        //window.history.pushState({}, '', `${window.location.pathname}/${pickModel[0].name}`);
        // Имя модели в фильтре
        setDefModel(pickModel[0].name);

        // Закрывает фильтр
        props.toggleFilter(false);
    }
    function sbrosFilter (){
        //Сбрасывает все на стандартные значения
        setDefMarka('Марка');
        setDefModel('Модель');
        setCurModel({});
        setModels([]);
        props.toggleFilter(false);
    }
    // function pickMark(name){
    //     let pickArr = markArr.filter(markaArr => markaArr.name === name);
    //     setModels(pickArr[0].models);
    //     // Имя марки в фильтре
    //     setDefMarka(pickArr[0].name);
    // }
    // function pickModel(name){
    //     let pickModel = modelsArr.filter(model => model.name === name);
    //     setCurModel(pickModel[0]);
    // }
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
                            <div className="filter-btn">Сбросить</div>
                        </div>
                    </div>
                    <div className="catalog-filter__list-section">
                        <div className="catalog-filter__list-section_title">
                            <span>По параметрам</span>
                        </div>
                        {
                            paramArr.map((item,index)=>{
                                return (
                                    <FilterParam key={index} item={item}/>
                                )
                            })
                        }

                        <div className="catalog-filter__list-section_btn">
                            <div className="filter-btn">Применить</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default CatalogFilter;
