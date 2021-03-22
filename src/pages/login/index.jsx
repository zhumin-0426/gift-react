import React from 'react';
import axios from '../../common/js/axios';
// 样式
import '../../css/login.less';
import loginBag from '../../assets/images/login-bag.jpg';
import loginInnerBg from '../../assets/images/login-inner-bg.jpg';
// antd组件
import { Row, Col, Checkbox,message } from 'antd';
import { Link } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminAccount: "",
            adminPassword: "",
            checked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ckeckBoxChange = this.ckeckBoxChange.bind(this);
    }
    // 组件挂在时
    componentDidMount() {
        let cookieData = document.cookie.split("; ");
        let arr = [];
        if (cookieData.length > 0) {
            cookieData.forEach((item => {
                let cookieDataItem = item.split("=");
                arr.push(cookieDataItem[1])
            }))
        }
        this.setState({
            adminAccount:arr[0],
            adminPassword:arr[1]
        })
    }
    // 多选框监听
    ckeckBoxChange(e) {
        this.setState({
            checked: e.target.checked
        })
    }
    // 表单数据监听
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // 表单提交
    handleSubmit(event) {
        let data = {
            'adminAccount': this.state.adminAccount,
            'adminPassword': this.state.adminPassword
        }
        axios.postAxios('/login/dologin', data).then(res => {
            console.log("res=>", res);
            if (res.status === 200) {
                // 存储用户信息
                const userId = res.data.userId;
                localStorage.setItem("userId", userId);
                if (this.state.checked) {
                    document.cookie = 'adminAccount=' + res.data.adminAccount;
                    document.cookie = 'adminPassword=' + res.data.adminPassword;
                }
            }else{
                message.error("登入失败哦!亲");
            }
        });
        event.preventDefault()
    }
    render() {
        const sectionElementStyle = {
            backgroundImage: `url(${loginBag})`
        }
        const loginFancyElementStyle = {
            backgroundImage: `url(${loginInnerBg})`
        }
        const loginBtn = {
            marginLeft: -4
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
                                    <h4 className="mb-30 fon-30">后 台 登 入</h4>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-item username mb-20">
                                            <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">账号</label>
                                            <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入您的账号" name="adminAccount" value={this.state.adminAccount} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-item username mb-20">
                                            <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">密码</label>
                                            <input className="w100 ant-input fon-w-500" type="password" placeholder="请输入您的密码" name="adminPassword" value={this.state.adminPassword} onChange={this.handleChange} />
                                        </div>
                                        <div className="remember-password mb-20">
                                            <Checkbox className="text-626" onChange={this.ckeckBoxChange}>记住密码</Checkbox>
                                        </div>
                                        <div className="form-item">
                                            <button type="submit" className="login-btn"><strong>登入</strong> <i className="iconfont icon-check fon-14" style={loginBtn}></i></button>
                                        </div>
                                        <div className="register-prompt mt-20 text-626">还没有账号吗？<strong className="text-84b"><Link to="/register">立即创建</Link></strong></div>
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
