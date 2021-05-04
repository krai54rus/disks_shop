import React,{useState,useEffect} from 'react';
import MainBanner from '../main/MainBanner';
import MainMarks from '../main/MainMarks';
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
    useEffect(() => {
        console.log('use effect Main page');
        if (markArr.length === 0) {
            fetch('./models.json')
            .then(res=>res.json())
            .then(res=>{
                getMarks(res);
                console.log(res);
            });
            // .catch(err => {
            //     console.log(err)
            // };
        };
    })
    return(
        <div className="main-page">
            <MainBanner />
            <MainMarks marks={markArr} />
            {/* 
            <MainDisks />
            <MainBrands /> */}
        </div>
    )
}
export default MainPage;