import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createRouter from './router/router';
import { Provider } from 'react-redux'
import configStore from './configstore'

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
  {createRouter()}
</Provider>, document.getElementById('root'));
registerServiceWorker();
