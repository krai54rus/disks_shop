import React from 'react';
import MainBanner from '../main/MainBanner';
import MainMarks from '../main/MainMarks';
import MainDisks from '../main/MainDisks';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { getAuto } from '../../store/actions/autoActions';
function MainPage(props){
    return(
        <div className="main-page">
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
