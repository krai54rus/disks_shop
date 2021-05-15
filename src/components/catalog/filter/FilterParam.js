import React, { useEffect, useState } from 'react';
function FilterParam(props){
    const [show,changeShow] = useState(false);
    const [sizeArr,setSize] = useState([
        {name:"15"},
        {name:"16"},
        {name:"17"},
        {name:"18"},
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
        <div className="catalog-filter__list_item" onClick={() => showFilter()}>
            <div className="catalog-filter-name">
                <span>{props.item.name}</span>
                <img className={` ${show ? "arrow-scale" : ""}`} src="./img/arrow-down.svg" alt="" />
            </div>

            <div className={`catalog-param-filter-values__list ${show ? "" : "hidden"}`}>
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
    );
}
export default FilterParam;
