import React, { useEffect, useState } from 'react';
function ConstructorPicture(props){
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
    })
    function showFilter(filtname){
        console.log(filtname);
    }
    return (
        <div className="constr-pic">
                <div className="constr-pic__wrap">
                    <div className="constr-pic__fon">
                        <div className="constr-pic__fon_img">
                            <img src="./img/constr-mersedes.png" alt="" />
                        </div>
                        <div className="constr-pic__fon_info">
                            <div className="constr-pic__fon_info-disk"></div>
                            <div className="constr-pic__fon_info-btn">
                                <div className="info-btn-save">Сохранить комплектацию</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default ConstructorPicture;
