import React , { Component } from 'react'




export default class Li extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='nav-item' onClick= { this.click.bind(this) }> 
             { this.props.children }
            </div>
        );
    }
    click() {
        var { index , onClick } = this.props ; 
        onClick(index);
    }
}