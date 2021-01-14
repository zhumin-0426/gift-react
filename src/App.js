import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 样式
import './App.less';
// 公共组件
import SideBar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';
// 子组件
import Login from './pages/login';
// import System from './pages/system';
// import Goods from './pages/goods';
// import Order from './pages/order';
// import Users from './pages/users';
// import PageDesign from './pages/pageDesign';
// import Demo from './pages/demo';
// 路由表
import {routerTable} from './common/js/roterTable';
// 路由守卫组件
import FrontendAuth from './pages/frontendAuth';
// 根组件
class App extends React.Component {
  constructor(props) {
    super(props);
    this.getChildDatas = this.getChildDatas.bind(this);
    this.state = {
      isCollapsed: false
    }
  }
  //获取子组件传递的数据 
  getChildDatas(data) {
    this.setState({
      isCollapsed: data
    })
  }
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login}></Route>
            <div className="wrapper">
              <Header getChildDatas={this.getChildDatas} />
              <div className="content-wrapper">
                <SideBar isCollapsed={this.state.isCollapsed} />
                <div className="content w100 pd-30">
                  <Switch>
                    {/* <Route path="/system" component={System} />
                    <Route path="/pageDesign" component={PageDesign} />
                    <Route path="/goods" component={Goods} />
                    <Route path="/order" component={Order} />
                    <Route path="/users" component={Users} />
                    <Route path="/demo" component={Demo} /> */}
                    <FrontendAuth routerConfig={routerTable} />
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
}
export default App;