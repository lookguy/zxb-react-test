import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from "./lib/layout/layout.example";
import Header from "./lib/layout/header";
import { Layout, Aside, Content } from "./lib/layout/layout";
import './example.scss';

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
                          <Link to="/icon">Icon</Link>
                      </li>
                      <li>
                          <Link to="/button">Button</Link>
                      </li>
                      <li>
                          <Link to="/dialog">Dialog </Link>
                      </li>
                      <li>
                          <Link to="/layout">布局 </Link>
                      </li>

                  </ul>
              </Aside>
              <Content className="site-content">
                  <Route path='/icon' component={IconExample} />
                  <Route path='/button' component={ButtonExample} />
                  <Route path='/dialog' component={DialogExample} />
                  <Route path='/layout' component={LayoutExample} />
              </Content>
          </Layout>
      </Layout>
  </Router>
  , document.querySelector('#root'));