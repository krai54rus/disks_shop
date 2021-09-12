import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAuto } from './store/actions/autoActions';
import { getDisks } from './store/actions/disksActions';
import { getCart } from './store/actions/cartActions';
import { useCookies } from 'react-cookie';
import { getUniqueId } from './api';
import { checkAuth } from './store/actions/personalActions';
// import { createStore } from 'redux';
// import reducers from './store/reducers/reducers';
// const store = createStore(reducers, applyMiddleware(testmiddle));
// const store = createStore(reducers);
function App() {
  const dispatch = useDispatch();
  const auto = useSelector(state => state.auto);
  const disks = useSelector(state => state.disks);
  const cart = useSelector(state => state.cart);
  const personal = useSelector(state => state.personal);
  const [cookies, setCookie] = useCookies(['clientId']);

  useEffect(()=>{
    if (personal.isAuth === '' && !personal.pending) {
      dispatch(checkAuth());
    }
    // Загрузка моделей/марок
    if (auto.items && auto.items.length == 0 && !auto.pending) {
        dispatch(getAuto());
    }
    // Загрузка дисков
    if (disks.items && disks.items.length == 0 && !disks.pending) {
        dispatch(getDisks());
    }
  })
  
  // Загрузка корзины из БД
  useEffect(() => {
    dispatch(getCart());
    getUniqueId(cookies, setCookie);
  }, []);

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
