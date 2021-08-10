import React, { useEffect } from 'react';
import MainBanner from '../main/MainBanner';
import MainMarks from '../main/MainMarks';
import MainDisks from '../main/MainDisks';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { getAuto } from '../../store/actions/autoActions';
function MainPage(props){
    // const dispatch = useDispatch();
    // const repos = useSelector(state => state.auto);

    // useEffect(()=>{
    //     if (repos.length == 0) {
    //         console.log(repos);
    //         // console.log('dispatch getAuto');
    //         // dispatch(getAuto());
    //     }
    // })

    function test() {
        // console.log(repos);
    }
    return(
        <div className="main-page">
            {/* <button onClick={()=>props.save()}>Save all</button>
            <button onClick={()=>props.getAll()}>Get all</button> */}
            <button onClick={()=>test()}>Get all</button>
            <MainBanner />
            <MainMarks />
            <MainDisks />
            <div className="container">
                <div className="main-img">
                    <img src="/img/cars-main.png" alt="" />
                </div>
            </div>
        </div>
    )
}
// function mapStateToProps (state) {
//     return {
//         auto: state.auto
//     }
// }

// function mapDispatchToProps (dispatch) {
//     return {
//         save: () => dispatch({type:'SAVE_ALL'}),
//         getAll: () => dispatch({type: 'GET_ALL'}),
//     }
// };

// export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
export default MainPage;
