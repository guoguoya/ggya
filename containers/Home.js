import React , { Component } from 'react'
import { Link } from 'react-router'


export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div>
            <div>Home</div>
            <Link to='/home'>home</Link>
            <Link to='/article'>article</Link>
            <Link to='/page'>page</Link>
          </div>
        );
    }
}