import React, { useEffect, useState } from 'react';
function FilterAuto(props){
    const [show,changeShow] = useState(false);
    const [markArr,setMarks] = useState([
        {name:"BMW"},
        {name:"Mercedes"},
        {name:"Audi"},
        {name:"Mazda"},
    ]);
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
    return (
        <div className="catalog-filter__list_item" >
            <div className="catalog-filter-name" >
                <span>{props.item.name}</span>
            </div>

            <div className='catalog-filter-values'>
                <div className="catalog-filter-values__wrap">
                    <div className="catalog-filter-values__select" onClick={() => showFilter()}>
                        <span className="filter-select__value">{props.item.name}</span>
                        <img className={` ${show ? "arrow-scale" : ""}`} src="./img/arrow-down.svg" alt="" />
                    </div>
                    <div className={`catalog-filter-auto-values__list ${show ? "" : "hidden"}`}>
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
            </div>
        </div>
    );
}
export default FilterAuto;
