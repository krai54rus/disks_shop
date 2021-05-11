import React, { useEffect, useState } from 'react';
function CatalogFilter(props){
    const [diskArr,getDisks] = useState([]);
    useEffect(() => {
        console.log('disks effect');
        if (diskArr.length === 0) {
            fetch('./disksmain.json')
            .then(res=>res.json())
            .then(res=>{
                getDisks(res);
                //console.log('disk',diskArr.length);
            });
        };
    })
    return (
        <div className="catalog-filter">
                <div className="catalog-filter__list">

                    <div className="catalog-filter__list_item">
                        <div className="catalog-filter-name">
                            <span>Марка</span>
                        </div>
                        <div className="catalog-filter-values">
                            <div className="catalog-filter-values__item">
                                <span>BMW</span>
                            </div>
                            <div className="catalog-filter-values__item">
                                <span>Mercedes</span>
                            </div>
                            <div className="catalog-filter-values__item">
                                <span>Audi</span>
                            </div>
                        </div>
                    </div>

                    <div className="catalog-filter__list_item">
                        <div className="catalog-filter-name">
                            <span>Модель</span>
                        </div>
                        <div className="catalog-filter-values">
                            <div className="catalog-filter-values__item">
                                <span>E-class</span>
                            </div>
                            <div className="catalog-filter-values__item">
                                <span>C-class</span>
                            </div>
                            <div className="catalog-filter-values__item">
                                <span>A-class</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    );
}
export default CatalogFilter;
