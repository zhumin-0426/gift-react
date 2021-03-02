import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 样式
import './App.less';
// 公共组件
import SideBar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';
// 子组件
import Login from './pages/login/index';
import Registered from './pages/login/registered';
import System from './pages/system/index';
import Goods from './pages/goods/index';
import GoodsDetail from './pages/goods/goodsDetail';
import Order from './pages/order/index';
import User from './pages/user/index';
import PageDesign from './pages/pageDesign/index';
// 
import {FrontendAuth} from './pages/FrontendAuth';
import {routerConfig  } from './pages/routerConfig ';
// 根组件
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCollapsed: false
    }
    this.getChildDatas = this.getChildDatas.bind(this)
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
            {/* <Route path="/login" exact component={Login}></Route>
            <Route path="/registered" exact component={Registered}></Route> */}
            <div className="wrapper">
              <Header getChildDatas={this.getChildDatas} />
              <div className="content-wrapper">
                {/* 侧边栏 */}
                <SideBar isCollapsed={this.state.isCollapsed} ></SideBar>
                <div className="content w100 pd-30">
                  <Switch>
                    {/* <Route path="/system" component={System} />
                    <Route path="/pageDesign" component={PageDesign} />
                    <Route path="/goods" component={Goods} />
                    <Route path="/goodsDetail" component={GoodsDetail} />
                    <Route path="/order" component={Order} />
                    <Route path="/user" component={User} /> */}
                    <FrontendAuth config={routerConfig} />
                  </Switch>
                  {/* 底部 */}  
                  <Footer ></Footer>
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