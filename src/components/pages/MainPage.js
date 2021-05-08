import React,{useState,useEffect} from 'react';
import MainBanner from '../main/MainBanner';
import MainMarks from '../main/MainMarks';
import MainDisks from '../main/MainDisks';
function MainPage(){
    // useEffect(() => {
    //     // effect
    //     fetch('/testapi/marks.json')
    //     .then(res=>res.json())
    //     .then(res=>console.log(res));
    //     // return () => {
    //     //     cleanup
    //     // };
    // }, [input]);
    const [markArr,getMarks] = useState([]);
    const [diskArr,getDisks] = useState([]);
    useEffect(() => {
        console.log(markArr.length);
        if (markArr.length === 0) {
            fetch('./models.json')
            .then(res=>res.json())
            .then(res=>{
                getMarks(res);
                console.log('marks',res);
            });
        };
        if (diskArr.length === 0) {
            console.log('disk lenght ',diskArr.length);
            fetch('./disksmain.json')
            .then(res=>res.json())
            .then(res=>{
                getDisks(res);
                console.log('disk',diskArr.length);
            });
        };
    })
    return(
        <div className="main-page">
            <MainBanner />
            <MainMarks marks={markArr} />
            <MainDisks disks={diskArr}/>
            {/* 
            <MainDisks />
            <MainBrands /> */}
        </div>
    )
}
export default MainPage;