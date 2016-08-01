import 'babel-polyfill'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import React , { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import mainreducers from './reducers/index'
import Page from './containers/page'

const loggerMiddleware = createLogger();

let store = createStore(mainreducers, 
  applyMiddleware(thunkMiddleware)
);
console.log(store.getState())
render(
  <Provider store={ store }>
    <Page />
  </Provider>
  ,
  document.getElementById('basePage')
);
