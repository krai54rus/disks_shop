import React,{useState,useEffect} from 'react';
import CatalogFilter from '../catalog/CatalogFilter';
import CatalogFilterMobile from '../catalog/CatalogFilterMobile';
import CatalogSection from '../catalog/CatalogSection';
import config from '../../config' ;
function CatalogPage(){
    // Диски каталога
    const [diskArr,setDisk] = useState([]);
    const [showFilter,toggleFilter] = useState(false);

    const [filterDisk,setFilterDisk] = useState([]);
    // Объект фильтров для дисков по параметрам
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
    
    function getAllDisks(){
        fetch(`${config.apiUrl}/disks/all`)
        .then(res=>res.json())
        .then(res=>{
            setDisk(res);
            setFilterDisk(res);
            makeSortParams(res);
            return res;
        });
    }
    function searchDisks(searchMark,searchModel){
        fetch(`${config.apiUrl}/catalog?marka=${searchMark}&model=${searchModel}`)
        .then(res=>res.json())
        .then(res=>{
            setDisk(res);
            setFilterDisk(res);
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
                filter:"size",
                values:arrSize,
            },
            {
                name:"Вылет (ET)",
                filter:"ET",
                values:arrET,
            },
            {
                name:"DIA",
                filter:"DIA",
                values:arrDIA,
            }
        ];
        setFilterProps(filterArr);
    }
    function filterDisks(filter,value){
        console.log(filter);
        console.log(value);
        console.log(diskArr);
        const resFilter = diskArr.filter((item,index)=> item[filter] == value);
        console.log(resFilter);
        setFilterDisk(resFilter);
        // makeSortParams(res);
    }
    useEffect(()=>{
        if (!diskArr.length) {
            getAllDisks();
        }
    })
    return(
        <div className="сatalog-page">
            <div className="container">
                <div className="catalog-wrapper">
                    <CatalogFilterMobile showFilter={showFilter} toggleFilter={toggleFilterFunc} />
                    <CatalogFilter 
                    getAllDisks={getAllDisks}
                    filterDisks={filterDisks} 
                    filterProps={filterProps} 
                    searchDisks={searchDisks} 
                    setDisk={setDisk} 
                    showFilter={showFilter} 
                    toggleFilter={toggleFilterFunc} 
                    />
                    <CatalogSection disks={filterDisk}/>
                </div>
            </div>
        </div>
    )
}
export default CatalogPage;
