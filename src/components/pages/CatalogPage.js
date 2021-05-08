import React,{useState,useEffect} from 'react';
import CatalogFilter from '../catalog/CatalogFilter';
import CatalogSection from '../catalog/CatalogSection';
function CatalogPage(){
    return(
        <div className="сatalog-page">
            <div className="container">
                <CatalogFilter />
                <CatalogSection disks={[{"name":"disk1"},{"name":"disk2"}]}/>
            </div>
        </div>
    )
}
export default CatalogPage;