import React,{useState,useEffect} from 'react';
import CatalogFilter from '../catalog/CatalogFilter';
import CatalogSection from '../catalog/CatalogSection';
function CatalogPage(){
    return(
        <div className="сatalog-page">
            <div className="container">
                <div className="catalog-wrapper">
                    <CatalogFilter />
                    <CatalogSection disks={[{"name":"disk1"},{"name":"disk2"},{"name":"disk3"},{"name":"disk4"}]}/>
                </div>
            </div>
        </div>
    )
}
export default CatalogPage;
