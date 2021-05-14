import React, { useEffect, useState } from 'react';
function CatalogFilter(props){
    // const [diskArr,getDisks] = useState([]);
    const [modelFilt,setModel] = useState(true);
    const [markArr,setMarks] = useState([
        {name:"BMW"},
        {name:"Mercedes"},
        {name:"Audi"},
        {name:"Mazda"},
    ]);
    const [sizeArr,setSize] = useState([
        {name:"15"},
        {name:"16"},
        {name:"17"},
        {name:"18"},
    ]);
    useEffect(() => {
        console.log('filter effect');
        // if (diskArr.length === 0) {
        //     fetch('./disksmain.json')
        //     .then(res=>res.json())
        //     .then(res=>{
        //         getDisks(res);
        //         //console.log('disk',diskArr.length);
        //     });
        // };
    })
    function showFilter(filtname){
        console.log(filtname);
    }
    return (
        <div className="catalog-filter">
                <div className="catalog-filter__list">
                    <div className="catalog-filter__list-section">
                        <div className="catalog-filter__list-section_title">
                            <span>По автомобилю</span>
                        </div>
                        <div className="catalog-filter__list_item">
                            <div className="catalog-filter-name" onClick={() => showFilter(modelFilt)}>
                                <span>Марка</span>
                                <img src="./img/arrow-down.svg" alt="" />
                            </div>

                            <div className={`catalog-filter-values ${modelFilt ? "" : "hidden"}`}>
                                {
                                    markArr.map((item,index)=>{
                                        return(
                                            <div key={index} className="catalog-filter-values__item">
                                                <span>{item.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="catalog-filter__list_item">
                            <div className="catalog-filter-name" onClick={(e) => showFilter(e)}>
                                <span>Модель</span>
                                <img src="./img/arrow-down.svg" alt="" />
                            </div>
                            <div className="catalog-filter-values hidden">
                            </div>
                        </div>

                        <div className="catalog-filter__list-section_btn">
                            <div className="filter-btn">Сбросить</div>
                        </div>
                    </div>
                    <div className="catalog-filter__list-section">
                    <div className="catalog-filter__list-section_title">
                            <span>По параметрам</span>
                        </div>
                        <div className="catalog-filter__list_item">
                            <div className="catalog-filter-name" onClick={() => showFilter(modelFilt)}>
                                <span>Диаметр</span>
                                <img src="./img/arrow-down.svg" alt="" />
                            </div>

                            <div className={`catalog-filter-values hidden`}>
                                {
                                    sizeArr.map((item,index)=>{
                                        return(
                                            <div key={index} className="catalog-filter-values__item">
                                                <span>{item.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="catalog-filter__list_item">
                            <div className="catalog-filter-name" onClick={(e) => showFilter(e)}>
                                <span>Вылет (ET)</span>
                                <img src="./img/arrow-down.svg" alt="" />
                            </div>
                            <div className="catalog-filter-values hidden">
                            </div>
                        </div>

                        <div className="catalog-filter__list_item">
                            <div className="catalog-filter-name" onClick={(e) => showFilter(e)}>
                                <span>DIA</span>
                                <img src="./img/arrow-down.svg" alt="" />
                            </div>
                            <div className="catalog-filter-values hidden">
                            </div>
                        </div>

                        <div className="catalog-filter__list-section_btn">
                            <div className="filter-btn">Применить</div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default CatalogFilter;
