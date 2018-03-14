import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login/Login';
// import TheDraft from './components/Draft/TheDraft';
import store from './store';


import './index.css';


ReactDOM.render(
  <Provider store={store} >
    <Login /> 
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();