import React , { Component } from 'react'




export default class Article extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      var array = [{t:1,a:[{t:2,a:[{t:11,a:[{t:13},{t:14}]},{t:12}]},{t:3}]},{t:4,a:[{t:6}]},{t:5,a:[{t:7}]}];
        return (
            <div>
              <div>Article</div>
              <Group items={ array }></Group>
            </div>
        )
    }
}

class Group extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      checked: -1
    };
  }

   sonGetInto(t){
    //
    console.log(this);
    console.log('我接到了儿子:' + t + '的通知');
    this.setState({
      checked: t 
    });
  }
  render() {
    let t = this.props.items; 
    let arr =  [];
    var context = this;
    t.forEach(function(item , index){
      var checked = false;
      if( item.t == context.state.checked ) {
        checked = true;
      }
      var temp = (<Item items = { item } key = { index } checked={ checked } index = { 0 } getInto= { context.sonGetInto.bind(context)}></Item>);
      arr.push(temp);
    });
    return(
      <div className="group">
        { arr }
      </div>

    );
  }
}
class Item extends Component {
  constructor(prop) {
    super(prop); 
    this.state = {
      t: this.props.items.t,
      checked: -1
    };
  }

  sonGetInto(t){
    //
    console.log(this);
    console.log('我接到了儿子:' + t + '的通知');
    this.setState({
      checked: t 
    });
  }

  send(e) {
    console.log("我被点击了， 我通知我的上一级告诉他 我是 "+ this.state.t);
    this.props.getInto(this.state.t);
    e.preventDefault();
    e.stopPropagation();
  }

  render(){
    let a = this.props.items.a; 
    let index = this.props.index;
    let checked = "我没有checked";
    if( this.props.checked){
      checked = "我被cheeked";
    }

    let sonIndex = index + 1; 
    let px = index * 10;
    px = px + 'px';
    if( !a ) {
      return (
        <div style = {{ marginLeft: px }} className="item" id = { this.props.items.t } onClick = { this.send.bind(this) } >
          <div>我是:{this.state.t } checked: { checked }</div>
        </div>
      );
    }
    let arr = [];
    const context = this; 
    a.forEach(function(item , index){
      var checked = false; 
      if( item.t == context.state.checked ) {
        checked = true;
      }
      var temp = (<Item index = { sonIndex } items = { item } checked={ checked } key={index} getInto= { context.sonGetInto.bind(context)}></Item>);
      arr.push(temp);
    });
    return (
      <div style = { {marginLeft: px } } className="item" id = { this.props.items.t } onClick = { this.send.bind(this) }>
        <div>我是:{this.state.t } checked: { checked }</div>
        { arr }
      </div>
    )
  }
}