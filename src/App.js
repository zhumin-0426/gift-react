import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
// 样式
import './App.less';
// 公共组件
import SideBar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';
// 子组件
const Login = lazy(() => import('./pages/login'));
const System = lazy(() => import('./pages/system'));
const Goods = lazy(() => import('./pages/goods'));
const Order = lazy(() => import('./pages/order'));
const Users = lazy(() => import('./pages/users'));
const PageDesign = lazy(() => import('./pages/pageDesign'));
const Demo = lazy(() => import('./pages/demo'));
// 根组件
function App() {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Link to="/"></Link>
          <Link to="/system"></Link>
          <Link to="/pageDesign"></Link>
          <Link to="/goods"></Link>
          <Link to="/orders"></Link>
          <Link to="/users"></Link>
          <Link to="/demo"></Link> */}
          <Switch>
            <Route path="/" exact component={Login}></Route>
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
                    <Route path="/demo" component={Demo} />
                  </Switch>
                  <Footer />
                </div>
              </div>
            </div>
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App;