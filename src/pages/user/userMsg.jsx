import React from 'react';
// 公共组件
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
// 样式
import '../../css/userMsg.less';
import userPic from '../../assets/images/userPic.jpg';
import Icon from '../../assets/icon/02.png';

// antd 组件
import { Row, Col, Breadcrumb, } from 'antd';
class Users extends React.Component {
    render() {
        return (
            <div className="main">
                <Row>
                    <Col span={12}>
                        <h3><strong>用户信息</strong></h3>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>系统</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                用户信息
                                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="user-msg-card w100 box-sd pd-17 bg-fff mb-30">
                            <div className="card-bg w100 box-siz">
                                <div className="user-info pos-a">
                                    <Row>
                                        <Col span={12}>
                                            <div className="dis-flx align-items-center">
                                                <div className="user-pic">
                                                    <img src={userPic} alt="" />
                                                </div>
                                                <div>
                                                    <h2 className="name text-white fon-30 fon-w-700 mb-0">Michael Bean</h2>
                                                    <p className="lavel text-white">- Admin</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={12} className="text-align-right align-self">
                                            <button type="button" className="editor-btn bg-218 text-white fon-14 "><i className="mr-5 iconfont icon-icon-"></i>编辑</button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={30, 30}>
                    <Col span={8}>
                        <div className="about-me-card box-sd bg-fff pd-17">
                            <div className="title fon-w-500 pb-14 bd-bottom mb-15"><strong>关于我</strong></div>
                            <div className="describe text-626 fon-w-500">I have more than 9 years of experience in the field of Graphic/ E-Learning/Web Designing.
Specialized in Adobe web & graphic designing tools and also in other tools. Professional in Corporate branding, Graphic designing, Web Designing, visualization, GUI, graphics & animations for e-learning, illustrations, web icons, logos, brochures, posters etc.</div>
                            <ul className="mt-20">
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-zhanghao text-84b mr-10 fon-20"></i>
                                    <span className="fon-13 text-626 fon-w-500">admin</span>
                                </li>
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-mima text-17a mr-10 fon-20"></i>
                                    <span className="fon-13 text-626 fon-w-500">123456</span>
                                </li>
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-weibiaoti- text-ffc mr-10 fon-20"></i>
                                    <span className="fon-13 text-626 fon-w-500">18820854754</span>
                                </li>
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-qq text-dc3 mr-10 fon-20"></i>
                                    <span className="fon-13 text-626 fon-w-500">1693638322</span>
                                </li>
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-weixin text-28a mr-10 fon-20"></i>
                                    <span className="fon-13 text-626 fon-w-500">1693638322</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="notice-card w100 box-sd pd-17 bg-fff">
                            <div className="title fon-w-500 pb-14 bd-bottom mb-15"><strong>系统通知</strong></div>
                            <ul>
                                <li className="dis-flx align-items-center bd-bottom">
                                    <img className="" src={Icon} alt="" />
                                    <div>
                                        <h2 className="mb-0">Martin smith </h2>
                                        <p className="fon-13 text-626 line-clamp2">Create tailor-cut websites with the exclusive </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Users;