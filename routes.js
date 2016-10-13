//react
import React , { Component } from 'react'
//page
import Page from './containers/page'
import Home from './containers/Home'
import Article from './containers/Article'
import BasePage from './containers/BasePage'
//router
import {Router, Route, Link, IndexRoute, Redirect, browserHistory} from 'react-router';

module.exports = (
    <Route path='/' component= { BasePage } >
      <Route path='/page' component= { Page } />
      <Route path='/article' component= { Article } />
      <IndexRoute component={ Home } />
    </Route>
);