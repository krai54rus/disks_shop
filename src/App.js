import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAuto } from './store/actions/autoActions';
// import { createStore } from 'redux';
// import reducers from './store/reducers/reducers';
// const store = createStore(reducers, applyMiddleware(testmiddle));
// const store = createStore(reducers);
function App() {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.auto);

    useEffect(()=>{
        if (repos.length == 0) {
            console.log('dispatch getAuto');
            dispatch(getAuto());
        }
    })
  return (
      <Router>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
  );
}

export default App;
