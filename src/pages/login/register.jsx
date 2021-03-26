import React from 'react';
import axios from '../../common/js/axios';
// 样式
import '../../css/login.less';
import registerBag from '../../assets/images/register-bg.jpg';
import registerInnerBg from '../../assets/images/register-inner-bg.jpg';
// antd组件
import { Row, Col, message } from 'antd';
import { Link } from 'react-router-dom';
class Registered extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adminAccount: "",
            adminPassword: "",
            spinBol: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // 表单数据监听
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // 表单提交
    handleSubmit(event) {
        let adminAccount = this.state.adminAccount;
        let adminPassword = this.state.adminPassword;
        if (adminAccount != "" && adminPassword != "") {
            let data = {
                'adminAccount': this.state.adminAccount,
                'adminPassword': this.state.adminPassword
            }
            axios.postAxios('/login/register', data).then(res => {
                this.setState({
                    spinBol: true
                })
                if (res.data.registerStatus === "该账号已注册哦!") {
                    message.error(res.data.registerStatus + '亲');
                } else {
                    message.success(res.data.registerStatus + '亲');
                }
            });
        }else{
            message.error("注册失败，请检查账号或密码哦！亲")
        }
        event.preventDefault()
    }
    render() {
        const sectionElementStyle = {
            backgroundImage: `url(${registerBag})`
        }
        const loginFancyElementStyle = {
            backgroundImage: `url(${registerInnerBg})`
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
                                    <h3 className="mb-30 fon-30">注 册 账 号</h3>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="form-item username mb-20">
                                            <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">账号</label>
                                            <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入您的账号" name="adminAccount" value={this.state.adminAccount} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-item username mb-20">
                                            <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">密码</label>
                                            <input className="w100 ant-input fon-w-500" type="password" placeholder="请输入您的密码" name="adminPassword" value={this.state.adminPassword} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-item">
                                            <button type="submit" className="login-btn">立即创建 <i className="iconfont icon-check fon-14" style={loginBtn}></i></button>
                                        </div>
                                        <div className="register-prompt mt-20 text-626">创建成功了吗？<strong className="text-84b"><Link to="/login">在这里登入</Link></strong></div>
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

export default Registered;
