import React,{useState,useEffect} from 'react';
import MainBanner from '../main/MainBanner';
import MainMarks from '../main/MainMarks';
import MainDisks from '../main/MainDisks';
import MainBrands from '../main/MainBrands';
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
    useEffect(() => {
        console.log('mainpage eff');
    })
    return(
        <div className="main-page">
            <MainBanner />
            <MainMarks />
            <MainDisks />
            <MainBrands />
        </div>
    )
}
export default MainPage;
