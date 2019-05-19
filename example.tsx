import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import Header from "./lib/layout/header";
import { Layout, Aside, Content } from "./lib/layout/layout";
import './example.scss';
import IconDemo from "./lib/icon/icon.demo";
import DialogDemo from "./lib/dialog/dialog.demo";
import LayoutDemo from "./lib/layout/layout.demo";

//require支持自定义加载方式，!!亦是其标志
const x = require('!!raw-loader!./lib/icon/icon.example.tsx');
console.log(x);

const logo = require('./logo.png') ;

ReactDOM.render(
  <Router>
      <Layout className="site-page">
          <Header className="site-header">
              <div className="logo">
                  <img src={logo} alt=""/>
              </div>
          </Header>
          <Layout>
              <Aside className="site-aside">
                  <ul>
                      <li>
                          <NavLink to="/icon">Icon</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dialog">Dialog </NavLink>
                      </li>
                      <li>
                          <NavLink to="/layout">布局 </NavLink>
                      </li>
                  </ul>
              </Aside>
              <Content className="site-content">
                  <Route path='/icon' component={IconDemo} />
                  <Route path='/dialog' component={DialogDemo} />
                  <Route path='/layout' component={LayoutDemo} />
              </Content>
          </Layout>
      </Layout>
  </Router>
  , document.querySelector('#root'));