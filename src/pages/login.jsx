import React from 'react';
// 样式
import '../css/login.less';
import loginBag from '../assets/images/login-bag.jpg';
import loginInnerBg from '../assets/images/login-inner-bg.jpg';
// antd组件
import { Row, Col } from 'antd';
class Login extends React.Component {
    render() {
        const sectionElementStyle = {
            backgroundImage: `url(${loginBag})`
        }
        const loginFancyElementStyle = {
            backgroundImage: `url(${loginInnerBg})`
        }
        const loginBtn = {
            marginLeft:-4
        }
        return (
            <div className="wrapper">
                <section className="height-100vh" style={sectionElementStyle}>
                    <div className="container">
                        <Row justify="center">
                            <Col xs={24} sm={24} xl={8}>
                                <div className="login-fancy h100 box-siz" style={loginFancyElementStyle}>
                                    <div className="login-fancy-box">
                                        <h1 className="login-fancy-title text-white mb-20">
                                            您好，热购后台！
                                        </h1>
                                        <p className="text-white mb-20 fon-w-500">欢迎观临来到我的后台</p>
                                    </div>
                                    <div className="recove"></div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} xl={8}>
                                <div className="login-form pd-30 bg-fff">
                                    <h3 className="mb-30 fon-30">后 台 登 入</h3>
                                    <form>
                                        <div className="form-item username mb-20">
                                            <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">账号</label>
                                            <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入您的账号" />
                                        </div>
                                        <div className="form-item username mb-20">
                                            <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">密码</label>
                                            <input className="w100 ant-input fon-w-500" type="password" placeholder="请输入您的密码" />
                                        </div>
                                        <div className="form-item">
                                            <button type="submit" className="login-btn">登入 <i className="iconfont icon-check fon-14" style={loginBtn}></i></button>
                                        </div>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </div>
        )
    }
}

export default Login;