import React, { useEffect, useState } from 'react';
import FilterAuto from '../catalog/filter/FilterAuto';
function ConstructorFilter(props){
    const [autoArr,setAuto] = useState([
        {name:"Марка"},
        {name:"Модель"},
    ]);
    useEffect(() => {
        console.log('const filter effect');
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
                </div>
            </div>
    );
}
export default ConstructorFilter;
