import React, { useState } from 'react';
function FilterParam(props){
    const [show,changeShow] = useState(false);
    function showFilter(){
        if (show) {
            changeShow(false);
        }else{
            changeShow(true);
        }
    }
    return (
        <div className="catalog-filter__list_item">
            <div className="catalog-filter-name" onClick={() => showFilter()}>
                <span>{props.name}</span>
                <img className={` ${show ? "arrow-scale" : ""}`} src="./img/arrow-down.svg" alt="" />
            </div>

            <div className={`catalog-param-filter-values__list ${show ? "" : "hidden"}`}>
                {
                    props.items.map((item,index)=>{
                        return(
                            <div onClick={() => props.filterDisks(props.filter,item)} key={index} className="catalog-filter-values__item">
                                <span>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default FilterParam;
