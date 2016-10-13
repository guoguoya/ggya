import React , { Component } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Navbar , Nav , NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

//mark@rebuild
/*
  NAV_ITEM array 链接项
*/
 let NAV_ITEM  = ['首页', 'html', 'JavaScript', 'css', 'jquery', 'react', 'node', 'webpack', '黑魔法'];
 
export default class BasePage extends Component {
    constructor(prop) {
        super(prop);
        this.navClick = this.navClick.bind(this);
    }
    //渲染NAV_ITEM 
    navClick(items) {
      //直接展示的item
      var array = items.map( (item, key ) => (<NavItem key={ key } >{item}</NavItem>) );
      //展示的个数
      let tot = 7;
      if( array.length <= tot ){
        return array ; 
      }
      else {
        var newArray = array.slice(0, tot);
        var mixArray  = items.splice(tot).map( (item, key ) => (<MenuItem eventKey={key} key={ key } >{ item }</MenuItem>) );
        let DROPDOWN = (<NavDropdown key={tot} title="more" id="nav-dropdown">
                           {mixArray}
                        </NavDropdown>);
        newArray.push(DROPDOWN);
        return newArray;
      }
    }
    render() {
        var array = this.navClick(NAV_ITEM);
        return (
          <div className="base-page">
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  ggya
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                { array }
              </Nav>
            </Navbar>
            <section className="main-section">
              <Grid bsClass="container">
                <Row>
                <Col md={8} mdOffset={2}>page</Col>
                </Row>
              </Grid>
            </section>
            { this.props.children }
          </div>
        )
    }

} 



