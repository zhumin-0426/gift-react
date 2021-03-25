import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// 样式
import './App.less';
// 页面公共组件
import SideBar from './components/sidebar';
import Header from './components/header';
import Footer from './components/footer';
import Chat from './components/chat';

import Login from './pages/login/index';
import Register from './pages/login/register'
// 路由守卫
import { FrontendAuth } from './pages/FrontendAuth';
import { routerConfig } from './pages/routerConfig ';
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
    const isLogin = localStorage.getItem('userId');
    let loginPage, registerPage
    if (!isLogin) {
      loginPage = <Route path="/login" exact component={Login}></Route>;
      registerPage = <Route path="/register" component={Register}></Route>
    }
    return (
      <div className="app">
        <Router>
          <Switch>
            {loginPage}
            {registerPage}
            <div className="wrapper">
              <Header getChildDatas={this.getChildDatas} />
              <div className="content-wrapper">
                {/* 侧边栏 */}
                <SideBar isCollapsed={this.state.isCollapsed} ></SideBar>
                <div className="content w100 pd-30">
                  <Switch>
                    <FrontendAuth config={routerConfig} />
                  </Switch>
                  {/* 底部 */}
                  <Footer ></Footer>
                </div>
                 {/* 消息按钮 */}
                 <Chat />
              </div>
            </div>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;