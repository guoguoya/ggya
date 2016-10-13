import React , { Component } from 'react'
import { connect } from 'react-redux'
import LeftNavigation from '../components/leftNavigation'
import { leftToggleChange , fetchPost} from '../actions/actions'
export default class Page extends Component  {
  constructor(props) {
    super(props);
  }
  render() { 
    const { dispatch, leftToggleActive, fetchState } = this.props ;
    console.log('left='+leftToggleActive);
    return (
      <div>
        <LeftNavigation index={ leftToggleActive } toggle= { index => { console.log(index); dispatch(leftToggleChange(index))} }></LeftNavigation>
        <button onClick={ e => { console.log(e.target.tagName); dispatch(fetchPost('/article/react/1'))} }> click </button>
        <div>{ fetchState.status }</div>
        <div>{ JSON.stringify(fetchState) }</div>
        <a href='/'>to home</a>
      </div>
    );
  }  
}



function select(state)  {
    return {
      leftToggleActive: state.leftToggleActive,
      fetchState: state.fetchState
    }
}

export default connect(select)(Page) 