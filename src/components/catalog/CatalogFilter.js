import React, { useEffect } from 'react';
function CatalogFilter(props){
    useEffect(()=>{
        console.log('filter');
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
