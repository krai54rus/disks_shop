import React, { useEffect, useState } from 'react';
function FilterParam(props){
    const [show,changeShow] = useState(false);
    useEffect(() => {
        // if (diskArr.length === 0) {
        //     fetch('./disksmain.json')
        //     .then(res=>res.json())
        //     .then(res=>{
        //         getDisks(res);
        //         //console.log('disk',diskArr.length);
        //     });
        // };
    })
    function showFilter(){
        if (show) {
            changeShow(false);
        }else{
            changeShow(true);
        }
    }
    function clickFilter(){
        return true;
    }
    return (
        <div className="catalog-filter__list_item" onClick={() => showFilter()}>
            <div className="catalog-filter-name">
                <span>{props.name}</span>
                <img className={` ${show ? "arrow-scale" : ""}`} src="./img/arrow-down.svg" alt="" />
            </div>

            <div className={`catalog-param-filter-values__list ${show ? "" : "hidden"}`}>
                {
                    props.items.map((item,index)=>{
                        return(
                            <div onClick={() => clickFilter()} key={index} className="catalog-filter-values__item">
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
