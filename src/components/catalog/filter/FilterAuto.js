import React, { useState } from 'react';
function FilterAuto(props){
    const [show,changeShow] = useState(false);
    const [currentVal,setCurVal] = useState(props.name);

    function showFilter(){
        if (show) {
            changeShow(false);
        }else{
            changeShow(true);
        }
    }
    return (
        <div className="catalog-filter__list_item" >
            <div className="catalog-filter-name" >
                <span>{props.name}</span>
            </div>

            <div className='catalog-filter-values'>
                <div className="catalog-filter-values__wrap">
                    <div className="catalog-filter-values__select" onClick={() => showFilter()}>
                        <span className="filter-select__value">{currentVal}</span>
                        <img className={` ${show ? "arrow-scale" : ""}`} src="/img/arrow-down.svg" alt="" />
                    </div>
                    <div className={`catalog-filter-auto-values__list ${show ? "" : "hidden"}`}>
                    {
                        props.item.map((item,index)=>{
                            return(
                                <div key={index} 
                                    className="catalog-filter-values__item" 
                                    onClick={
                                        ()=>{
                                        changeShow(false);
                                        setCurVal(item.name);
                                        return props.pickFunction(item.name);
                                        }
                                    }
                                >
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default FilterAuto;
