import React ,{ Component } from 'react'
import Li from './Li'



export default class LeftNavigation extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        var propIndex = this.props.index ;
        var arry = ['首页', 'html', 'JavaScript', 'css', 'jquery', 'react', 'node', 'webpack', '黑魔法'];
        var that = this;
        var items = arry.map(function(item , index){
            if(index == propIndex ){
              return <Li key={ index } index={ index } onClick={ that.props.toggle } >{'active='+item }</Li>
            }
            else {
              return  <Li key={ index } index={ index } onClick={ that.props.toggle } >{ item }</Li>
            }

        });
        return (
            <div className='left-navbar'>
              { items}
            </div>
        );
    }
}