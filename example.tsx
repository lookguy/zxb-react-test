import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from "./lib/layout/layout.example";
import Header from "./lib/layout/header";
import { Layout, Aside, Content } from "./lib/layout/layout";
import './example.scss';
import IconDemo from "./lib/icon/icon.demo";

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
                  <Route path='/button' component={ButtonExample} />
                  <Route path='/dialog' component={DialogExample} />
                  <Route path='/layout' component={LayoutExample} />
              </Content>
          </Layout>
      </Layout>
  </Router>
  , document.querySelector('#root'));