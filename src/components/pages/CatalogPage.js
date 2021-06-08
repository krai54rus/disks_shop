import React,{useState,useEffect} from 'react';
import CatalogFilter from '../catalog/CatalogFilter';
import CatalogFilterMobile from '../catalog/CatalogFilterMobile';
import CatalogSection from '../catalog/CatalogSection';
import config from '../../config' ;
function CatalogPage(){
    // const [diskArr,setDisk] = useState([{"name":"disk1"},{"name":"disk2"},{"name":"disk3"},{"name":"disk4"},{"name":"disk1"},{"name":"disk2"},{"name":"disk3"},{"name":"disk4"}]);
    const [diskArr,setDisk] = useState([]);
    const [showFilter,toggleFilter] = useState(false);
    const filtObj = [
        {
            name:"Диаметр",
            values:[],
        },
        {
            name:"ET",
            values:[],
        },
        {
            name:"DIA",
            values:[],
        }
    ];
    const [filterProps,setFilterProps] = useState(filtObj);
    function toggleFilterFunc(show = false) {
        toggleFilter(show);
    }
    useEffect(()=>{
        if (!diskArr.length) {
            fetch(`${config.apiUrl}/disks/all`)
            .then(res=>res.json())
            .then(res=>{
                setDisk(res);
                makeSortParams(res);
                return res;
            });
        }
    })
    function searchDisks(searchMark,searchModel){
        fetch(`${config.apiUrl}/catalog?marka=${searchMark}&model=${searchModel}`)
        .then(res=>res.json())
        .then(res=>{
            setDisk(res);
            makeSortParams(res);
            return res;
        });
    }
    function makeSortParams(arrDisk){
        let arrET = [];
        let arrDIA = [];
        let arrSize = [];
        arrDisk.forEach((item,index)=>{
            arrET.push(item.ET);
            arrDIA.push(item.DIA);
            arrSize.push(item.size);
        });
        // Оставляем уникальные значения в массиве
        arrET = Array.from(new Set(arrET));
        arrDIA = Array.from(new Set(arrDIA));
        arrSize = Array.from(new Set(arrSize));
        const filterArr = [
            {
                name:"Диаметр",
                values:arrSize,
            },
            {
                name:"ET",
                values:arrDIA,
            },
            {
                name:"DIA",
                values:arrET,
            }
        ];
        console.log(filterArr);
        setFilterProps(filterArr);
    }
    return(
        <div className="сatalog-page">
            <div className="container">
                <div className="catalog-wrapper">
                    <CatalogFilterMobile showFilter={showFilter} toggleFilter={toggleFilterFunc} />
                    <CatalogFilter filterProps={filterProps} searchDisks={searchDisks} setDisk={setDisk} showFilter={showFilter} toggleFilter={toggleFilterFunc} />
                    <CatalogSection disks={diskArr}/>
                </div>
            </div>
        </div>
    )
}
export default CatalogPage;
