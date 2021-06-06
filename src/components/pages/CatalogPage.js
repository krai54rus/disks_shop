import React,{useState,useEffect} from 'react';
import CatalogFilter from '../catalog/CatalogFilter';
import CatalogFilterMobile from '../catalog/CatalogFilterMobile';
import CatalogSection from '../catalog/CatalogSection';
import config from '../../config' ;
function CatalogPage(){
    // const [diskArr,setDisk] = useState([{"name":"disk1"},{"name":"disk2"},{"name":"disk3"},{"name":"disk4"},{"name":"disk1"},{"name":"disk2"},{"name":"disk3"},{"name":"disk4"}]);
    const [diskArr,setDisk] = useState([]);
    const [showFilter,toggleFilter] = useState(false);
    function toggleFilterFunc(show = false) {
        toggleFilter(show);
    }
    useEffect(()=>{
        if (!diskArr.length) {
            fetch(`${config.apiUrl}/disks/all`)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                    setDisk(res);
                return res;
            });
        }
    })
    return(
        <div className="сatalog-page">
            <div className="container">
                <div className="catalog-wrapper">
                    <CatalogFilterMobile showFilter={showFilter} toggleFilter={toggleFilterFunc} />
                    <CatalogFilter showFilter={showFilter} toggleFilter={toggleFilterFunc} />
                    <CatalogSection disks={diskArr}/>
                </div>
            </div>
        </div>
    )
}
export default CatalogPage;
