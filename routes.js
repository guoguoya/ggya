//react
import React , { Component } from 'react'
//page
import Page from './containers/page'
import Home from './containers/Home'
import Article from './containers/Article'
//router
import {Router, Route, Link, IndexRoute, Redirect, browserHistory} from 'react-router';

module.exports = (
    <Router history= { browserHistory } >
      <Route path='/' component= { Home } />
      <Route path='/page' component= { Page } />
      <Route path='/article' component= { Article } />
    </Router>
);