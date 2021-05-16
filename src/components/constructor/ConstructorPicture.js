import React, { useEffect } from 'react';
function ConstructorPicture(props){
    // const [diskArr,getDisks] = useState([]);
    useEffect(() => {
        console.log('constr pic effect');
    })
    return (
        <div className="constr-pic">
                <div className="constr-pic__wrap">
                    <div className="constr-pic__fon">
                        <div className="constr-pic__fon_img">
                            {
                                props.disk.constrImg &&
                                <div className="constr-img-disk disk-right">
                                    <img src={`./img/${props.disk.constrImg}`} alt="" />
                                </div>
                            }

                            {
                                props.disk.constrImg &&
                                <div className="constr-img-disk disk-left">
                                    <img src={`./img/${props.disk.constrImg}`} alt="" />
                                </div>
                            }

                            <div className="constr-img-auto">
                                <img  src="./img/constr-mersedes-700.png" alt="" />
                            </div>
                        </div>
                        {
                            Object.keys(props.disk).length !== 0 &&
                            <div className="constr-pic__fon_info">
                                <div className="constr-pic__fon_info-disk">
                                    {props.disk.name}
                                </div>
                                <div className="constr-pic__fon_info-btn">
                                    <div className="info-btn-save">Сохранить комплектацию</div>
                                </div>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
    );
}
export default ConstructorPicture;
