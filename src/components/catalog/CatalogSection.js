import React from 'react';
import CatalogDisk from './CatalogDisk';
function CatalogSection(props){
    return (
        <div className="catalog-section">
                <div className="catalog-disks__title">
                    <h1 className="catalog-disks__title-text">Диски</h1>
                    <span className="catalog-disks__title-count">Дисков найдено: {props.disks.length}</span>
                </div>
                <div className="catalog-disks__list">
                    {
                        props.disks.length > 0 &&
                        props.disks.map((item,index)=>
                            <CatalogDisk key={index} item={item} />
                        )
                    }
                </div>
            </div>
    );
}
export default CatalogSection;
