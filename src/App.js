import React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
// 样式
import './App.less';
// 公共组件
import SideBar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';
// 子组件
import Login from './pages/login';
import System from './pages/system';
import Goods from './pages/goods';
import Order from './pages/order';
import Users from './pages/users';
import PageDesign from './pages/pageDesign';
// 根组件
function App() {
  return (
    <div className="app">
      <Router>
        <Link to="/"></Link>
        <Link to="/system"></Link>
        <Link to="/pageDesign"></Link>
        <Link to="/goods"></Link>
        <Link to="/orders"></Link>
        <Link to="/users"></Link>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <div className="wrapper">
            <Header />
            <div className="content-wrapper">
              <SideBar />
              <div className="content w100 pd-30">
                <Switch>
                  <Route path="/system" component={System} />
                  <Route path="/pageDesign" component={PageDesign} />
                  <Route path="/goods" component={Goods} />
                  <Route path="/order" component={Order} />
                  <Route path="/users" component={Users} />
                </Switch>
                <Footer />
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  )
}

export default App;