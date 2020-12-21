import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.less';
// antd样式
import '.././node_modules/antd/dist/antd.less';
// 公共样式
import './common/css/common.less';
// 阿里矢量图标库
import './assets/iconfont/iconfont.css';
// 根组件
import App from './App';
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
