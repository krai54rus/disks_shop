import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css';
import { createStore } from 'redux';
import reducers from './store/reducers/reducers';
// const store = createStore(reducers, applyMiddleware(testmiddle));
const store = createStore(reducers);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
