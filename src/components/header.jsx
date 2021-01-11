import React from 'react';
// 样式
import HeaderMoudleCss from '../css/header.module.css';
import Logo from '../assets/icon/logo.png';
import Userpic from '../assets/images/userPic.jpg';
// antd组件
import { Badge, Menu, Dropdown, Divider, Row, Col } from 'antd';
// 头部
class Herder extends React.Component {
    constructor(props){
        super(props);
        this.toggleCollapsed = this.toggleCollapsed.bind(this)
        this.state = {
            collapsed: true
        }
    }

    toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
        this.props.getChildDatas(this.state.collapsed);
    };

    render() {
        const style = {
            fontSize: 30 + 'px'
        }
        const userMenu = (
            <Menu>
                <Menu.Item className="hover-bg-none">
                    <h4 className="user-name">Mr zhu</h4>
                    <small className="text-999">18820854754@139.com</small>
                </Menu.Item>
                <div className="w100 bd-top"></div>
                <Menu.Item className="hover-bg-f6f">
                    <div className="menu-item">
                        <i className="iconfont icon-email mr-10 text-28a"></i>
                        <span className="text-333">消息</span>
                    </div>
                </Menu.Item>
                <Menu.Item className="hover-bg-f6f">
                    <div className="menu-item">
                        <i className="iconfont icon-ContactUser mr-10 text-ffc"></i>
                        <span className="text-333">个人中心</span>
                    </div>
                </Menu.Item>
                <Divider />
                <Menu.Item className="hover-bg-f6f">
                    <div className="menu-item">
                        <i className="iconfont icon-setting mr-10 text-17a"></i>
                        <span className="text-333">设置</span>
                    </div>
                </Menu.Item>
                <Menu.Item className="hover-bg-f6f">
                    <div className="menu-item">
                        <i className="iconfont icon-unlock mr-10 text-dc3"></i>
                        <span className="text-333">退出</span>
                    </div>
                </Menu.Item>
            </Menu>
        );
        const appMenu = (
            <Menu>
                <Menu.Item className="hover-bg-none">
                    <h4 className="user-name text-6c7 fon-w-500">我的应用</h4>
                </Menu.Item>
                <div className="w100 bd-top"></div>
                <Menu.Item className="hover-bg-none">
                    <ul className="app-box w300 dis-flx align-items-center justify-space-between flx-wap">
                        <Row className="w100">
                            <Col span={12}>
                                <li className="app-box-item text-align">
                                    <i className="iconfont icon-editor text-ffc dis-block mb-10 mt-10" style={style}></i>
                                    <span className="text-333 dis-block">添加订单</span>
                                </li>
                            </Col>
                            <Col span={12}>
                                <li className="app-box-item text-align">
                                    <i className="iconfont icon-transport mb-10 mt-10 text-dc3 dis-block" style={style}></i>
                                    <span className="text-333 dis-block">新订单</span>
                                </li>
                            </Col>
                        </Row>
                    </ul>
                </Menu.Item>
            </Menu>
        );
        const noticeMenu = (
            <Menu>
                <Menu.Item className="hover-bg-none dis-flx align-items-center justify-space-between">
                    <h4 className="user-name text-6c7 fon-w-500">系统通知</h4>
                    <Badge color="red" count={25} />
                </Menu.Item>
                <div className="w100 bd-top"></div>
                <Menu.Item className="hover-bg-f6f">
                    <div className="notice-item w300 dis-flx align-items-center justify-space-between">
                        <div className="title text-333">New registered userJust</div>
                        <div className="time text-999">now</div>
                    </div>
                </Menu.Item>
            </Menu>
        )
        return (
            <div className="herder bg-fff w100 navbar">
                <div className="navbar dis-flx align-items-center justify-space-between">
                    <div className="navbar-left dis-flx align-items-center">
                        <div className="logo ml-20">
                            <div className="logo-icon">
                                <img className="dis-block" src={Logo} alt="" />
                            </div>
                        </div>
                        <div className="line-icon" onClick={this.toggleCollapsed}>
                            <i className={this.state.collapsed?"iconfont icon-align-left fon-30 text-878":"iconfont icon-alignleft fon-30 text-878"}></i>
                        </div>
                    </div>
                    <ul className="navbar-right dis-flx align-items-center mb-0">
                        <Dropdown overlay={noticeMenu} placement="bottomRight" arrow>
                            <li className="message">
                                <Badge status="error" />
                                <i className="iconfont icon-bell fon-25 text-878"></i>
                            </li>
                        </Dropdown>
                        <Dropdown overlay={appMenu} placement="bottomRight" arrow>
                            <li className="application mr-20 ml-20">
                                <i className="iconfont fon-25 icon-application text-878"></i>
                            </li>
                        </Dropdown>
                        <Dropdown overlay={userMenu} placement="bottomRight" arrow>
                            <li className="user-pic">
                                <img className="dis-block" src={Userpic} alt="" />
                            </li>
                        </Dropdown>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Herder;