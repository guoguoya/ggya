import 'babel-polyfill'
import createLogger from 'redux-logger'
//react
import React , { Component } from 'react'
import { render } from 'react-dom'
//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
//reducer
import mainreducers from './reducers/index'
//router
import {Router,Redirect, browserHistory} from 'react-router';
import routes from './routes'

const loggerMiddleware = createLogger();
let store = createStore(mainreducers, 
  applyMiddleware(thunkMiddleware)
);
console.log(store.getState())
render(
  <Provider store={ store } >
    <Router  routes={ routes } history={ browserHistory } />
  </Provider>,
  document.getElementById('app')
);