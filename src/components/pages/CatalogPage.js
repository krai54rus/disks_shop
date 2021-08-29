import React,{useState,useEffect} from 'react';
import CatalogFilter from '../catalog/CatalogFilter';
import CatalogFilterMobile from '../catalog/CatalogFilterMobile';
import CatalogSection from '../catalog/CatalogSection';
import config from '../../config' ;
import { useSelector } from 'react-redux';
function CatalogPage(){
    // Диски каталога
    const disksRedux = useSelector(state => state.disks);
    const autoRedux = useSelector(state => state.auto);
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
        if (disksRedux.items.length) {
            setDisk(disksRedux.items);
            setFilterDisk(disksRedux.items);
            makeSortParams(disksRedux.items);
        }
        // fetch(`${config.apiUrl}/disks`)
        // .then(res=>res.json())
        // .then(res=>{
        //     setDisk(res);
        //     setFilterDisk(res);
        //     makeSortParams(res);
        //     return res;
        // });
    }
    function searchDisks(searchMark,searchModel){
        if (disksRedux.items.length) {
            const disks = searchFilter(searchMark,searchModel);
            if (disks && disks.length) {
                setDisk(disks);
                setFilterDisk(disks);
                makeSortParams(disks);
            }
        }
        // fetch(`${config.apiUrl}/catalog?marka=${searchMark}&model=${searchModel}`)
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log('search /catalog ', res);
        //     setDisk(res);
        //     setFilterDisk(res);
        //     makeSortParams(res);
        //     return res;
        // });
    }
    function searchFilter(mark,model){
        const autoMark = autoRedux.items.find(item => item.name === mark);
        if (autoMark) {
            const autoModel = autoMark.models.find(item => item.name === model);
            if (autoModel) {
                return disksRedux.items.filter(item => autoModel.size.includes(item.size) );
            }
        }
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
        function compareNumbers(a, b) {
            return a - b;
        }
        // Оставляем уникальные значения в массиве
        arrET = Array.from(new Set(arrET)).sort(compareNumbers);
        arrDIA = Array.from(new Set(arrDIA)).sort(compareNumbers);
        arrSize = Array.from(new Set(arrSize)).sort(compareNumbers);
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
        
        // if (!diskArr.length) {
        //     getAllDisks();
        // }
        if (disksRedux.items.length && !diskArr.length) {
            console.log('catalogPage ', disksRedux);
            setDisk(disksRedux.items);
            setFilterDisk(disksRedux.items);
            makeSortParams(disksRedux.items);
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
