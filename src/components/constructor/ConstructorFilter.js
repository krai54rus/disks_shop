import React, { useEffect, useState } from 'react';
function ConstructorFilter(props){
    // const [diskArr,getDisks] = useState([]);
    const [modelFilt,setModel] = useState(true);
    const [markArr,setMarks] = useState([
        {name:"BMW"},
        {name:"Mercedes"},
        {name:"Audi"},
        {name:"Mazda"},
    ]);
    const [modelArr,setModels] = useState([
        {name:"x5"},
        {name:"s7"},
        {name:"x6"},
        {name:"s6"},
    ]);
    useEffect(() => {
        console.log('constr filter effect');
        // if (diskArr.length === 0) {
        //     fetch('./disksmain.json')
        //     .then(res=>res.json())
        //     .then(res=>{
        //         getDisks(res);
        //         //console.log('disk',diskArr.length);
        //     });
        // };
    })
    function showFilter(filtname){
        console.log(filtname);
    }
    return (
        <div className="constr-filter">
                <div className="constr-filter__wrap">
                  <div className="constr-filter__section">
                    <div className="constr-filter__section_title">
                      <span>Марка</span>
                    </div>
                    <div className="constr-filter__section_list">
                      {
                        markArr.length > 0 &&
                        markArr.map((item,index)=>{
                          return (
                            <div key={index} className="constr-filter__section_list-item">
                              <span>{item.name}</span>
                            </div>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div className="constr-filter__section">
                    <div className="constr-filter__section_title">
                      <span>Модель</span>
                    </div>
                    <div className="constr-filter__section_list">
                      {
                        modelArr.length > 0 &&
                        modelArr.map((item,index)=>{
                          return (
                            <div key={index} className="constr-filter__section_list-item">
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
export default ConstructorFilter;
