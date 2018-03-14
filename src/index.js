import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import registerServiceWorker from './registerServiceWorker';
// import Dashboard from './components/Dashboard';
import TheDraft from './components/Draft/TheDraft';
import store from './store';


import './index.css';


ReactDOM.render(
  <Provider store={store} >
    <TheDraft /> 
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();