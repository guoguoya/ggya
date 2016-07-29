import 'babel-polyfill'
import React , { Component } from 'react'
import { render } from 'react-dom'
import Page from './containers/page.js'


render(
  <Page />,
  document.getElementById('basePage')
);
