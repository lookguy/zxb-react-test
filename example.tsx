import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from "./lib/layout/layout.example";
import Header from "./lib/layout/header";
import { Layout, Aside, Content, Footer} from "./lib/layout/layout";
import './example.scss';

const logo = require('./logo.png') ;

ReactDOM.render(
  <Router>
      <Layout className="page">
          <Header>
              <div className="logo">
                  <img src={logo} alt=""/>
                  zui
              </div>
          </Header>
          <Layout>
              <Aside>
                  <h2>组件</h2>
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
              <Content>
                  <Route path='/icon' component={IconExample} />
                  <Route path='/button' component={ButtonExample} />
                  <Route path='/dialog' component={DialogExample} />
                  <Route path='/layout' component={LayoutExample} />
              </Content>
          </Layout>
          <Footer>
              footer
          </Footer>
      </Layout>
  </Router>
  , document.querySelector('#root'));