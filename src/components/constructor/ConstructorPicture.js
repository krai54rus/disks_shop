import React, { useEffect } from 'react';
function ConstructorPicture(props){
    // const [diskArr,getDisks] = useState([]);
    useEffect(() => {
        console.log(props);
    })
    return (
        <div className="constr-pic">
                <div className="constr-pic__wrap">
                    <div className="constr-pic__fon">
                        <div className="constr-pic__fon_img">
                            {
                                props.disk.constrImg &&
                                <div className="constr-img-disk disk-left" style={{left:props.pictureModel.left}}>
                                    <img src={`/img/${props.disk.constrImg}`} alt="" />
                                </div>
                            }
                            {
                                props.disk.constrImg &&
                                <div className="constr-img-disk disk-right" style={{left:props.pictureModel.right}}>
                                    <img src={`/img/${props.disk.constrImg}`} alt="" />
                                </div>
                            }
                            <div className="constr-img-auto">
                                {
                                    props.pictureModel && props.pictureModel.img
                                    ?   <img src={`/img/${props.pictureModel.img}`} alt="" />
                                    :   <div className="constr__no-img">
                                            <div className="constr__no-img_overlay">
                                                <span>Выберите Марку и Модель</span>
                                            </div>
                                            <img src={`/img/e-class.png`} alt="" />
                                        </div>
                                }
                            </div>
                        </div>
                        {
                            Object.keys(props.disk).length !== 0 &&
                            <div className="constr-pic__fon_info">
                                {/* <div className="constr-pic__info-small">
                                    <span>{props.disk.name}</span>
                                </div> */}
                                <div className="constr-pic__info-wrap">
                                    <div className="constr-pic__fon_info-disk">
                                        <div className="constr-pic__info-disk_prop prop-top prop-name">
                                            <span>{props.disk.name}</span>
                                        </div>
                                        <div className="constr-pic__info-disk_prop prop-top prop-price">
                                            <span>{props.disk.price}</span>
                                        </div>
                                        <div className="constr-pic__info-disk_prop prop-size">
                                            <span>Диаметр</span>
                                            <span>{props.disk.size}</span>
                                        </div>
                                        <div className="constr-pic__info-disk_prop prop-et">
                                            <span>Вылет (ET)</span>
                                            <span>{props.disk.et}</span>
                                        </div>
                                        <div className="constr-pic__info-disk_prop prop-dia">
                                            <span>DIA</span>
                                            <span>{props.disk.dia}</span>
                                        </div>
                                    </div>
                                    <div className="constr-pic__fon_info-btn">
                                        <div className="info-btn-save">Сохранить комплектацию</div>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
    );
}
export default ConstructorPicture;
