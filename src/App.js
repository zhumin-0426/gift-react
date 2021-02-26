import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 样式
import './App.less';
// 公共组件
import SideBar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';
// 子组件
import LoginPage from './pages/login';
import SystemPage from './pages/system';
import GoodsPage from './pages/goods';
import GoodsDetailPage from './pages/goodsDetail';
import OrderPage from './pages/order';
import UsersPage from './pages/users';
import PageDesignPage from './pages/pageDesign';
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
            <Route path="/login" exact component={LoginPage}></Route>
            <div className="wrapper">
              <Header getChildDatas={this.getChildDatas} />
              <div className="content-wrapper">
                {/* 侧边栏 */}
                <SideBar isCollapsed={this.state.isCollapsed} ></SideBar>
                <div className="content w100 pd-30">
                  <Switch>
                    <Route path="/system" component={SystemPage} />
                    <Route path="/pageDesign" component={PageDesignPage} />
                    <Route path="/goods" component={GoodsPage} />
                    <Route path="/goodsDetail" component={GoodsDetailPage} />
                    <Route path="/order" component={OrderPage} />
                    <Route path="/users" component={UsersPage} />
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