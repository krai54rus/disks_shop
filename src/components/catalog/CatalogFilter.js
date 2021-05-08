import React from 'react';
function CatalogFilter(props){
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
                </div>
            </div>
    );
}
export default CatalogFilter;