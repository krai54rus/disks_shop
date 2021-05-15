import React, { useEffect, useState } from 'react';
import FilterParam from './filter/FilterParam';
import FilterAuto from './filter/FilterAuto';
function CatalogFilter(props){
    const [autoArr,setAuto] = useState([
        {name:"Марка"},
        {name:"Модель"},
    ]);
    const [paramArr,setParam] = useState([
        {name:"Диаметр"},
        {name:"Вылет (ET)"},
        {name:"DIA"},
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
    return (
        <div className="catalog-filter">
                <div className="catalog-filter__list">
                    <div className="catalog-filter__list-section">
                        <div className="catalog-filter__list-section_title">
                            <span>По автомобилю</span>
                        </div>
                        {
                            autoArr.map((item,index)=>{
                                return (
                                    <FilterAuto key={index} item={item}/>
                                )
                            })
                        }

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
