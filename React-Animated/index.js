import './index.less'
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import { renderRoutes } from 'react-router-config';
import {HashRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './app';

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);