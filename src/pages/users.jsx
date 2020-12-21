import React from 'react';
// 公共组件
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';
// 样式
import '../css/users.less';
import Userpic from '../assets/images/userPic.jpg';
import QQ from '../assets/images/QQ.png';
import Wx from '../assets/images/wx.png';
// antd 组件
import { Row, Col, Breadcrumb, Divider, Menu, Dropdown, Pagination } from 'antd';
class Users extends React.Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <i className="iconfont icon-remove mr-10 text-dc3"></i>
                    <span className="fon-w-500 text-333">删除</span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="main">
                <Row>
                    <Col span={12}>
                        <h2>联系人</h2>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>系统</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                联系人
                                    </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row gutter={[30, 30]}>
                    <Col span={8}>
                        <div className="user-card box-sd">
                            <div className="user-card-top bg-28a pd-21 pos-r">
                                <div className="user-name text-align pos-r text-white mb-20">
                                    <span className="fon-18 fon-w-700">Mellissa Doe</span>
                                    <Dropdown overlay={menu} trigger={['click']} arrow>
                                        <i className="iconfont icon-More pos-a top-0 right-0"></i>
                                    </Dropdown>
                                </div>
                                <div className="user-pic pos-a">
                                    <img src={Userpic} alt="" />
                                </div>
                            </div>
                            <div className="card-body bg-fff pd-21">
                                <div className="tag fon-13 text-626 text-align mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</div>
                                <ul className="contact-way">
                                    <li>
                                        <img src={Wx} alt="" />
                                    </li>
                                    <li>
                                        <img src={QQ} alt="" />
                                    </li>
                                </ul>
                                <Divider />
                                <Row className="mb-20 mt-30">
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">热销商品</div>
                                        <div className="text-28a fon-18 fon-w-700 mt-10">电脑</div>
                                    </Col>
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">销量</div>
                                        <div className="text-dc3 fon-18 fon-w-700 mt-10">销量</div>
                                    </Col>
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">价格</div>
                                        <div className="text-ffc fon-18 fon-w-700 mt-10">¥999</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="user-card box-sd">
                            <div className="user-card-top bg-28a pd-21 pos-r">
                                <div className="user-name text-align pos-r text-white mb-20">
                                    <span className="fon-18 fon-w-700">Mellissa Doe</span>
                                    <Dropdown overlay={menu} trigger={['click']} arrow>
                                        <i className="iconfont icon-More pos-a top-0 right-0"></i>
                                    </Dropdown>
                                </div>
                                <div className="user-pic pos-a">
                                    <img src={Userpic} alt="" />
                                </div>
                            </div>
                            <div className="card-body bg-fff pd-21">
                                <div className="tag fon-13 text-626 text-align mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</div>
                                <ul className="contact-way">
                                    <li>
                                        <img src={Wx} alt="" />
                                    </li>
                                    <li>
                                        <img src={QQ} alt="" />
                                    </li>
                                </ul>
                                <Divider />
                                <Row className="mb-20 mt-30">
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">热销商品</div>
                                        <div className="text-28a fon-18 fon-w-700 mt-10">电脑</div>
                                    </Col>
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">销量</div>
                                        <div className="text-dc3 fon-18 fon-w-700 mt-10">销量</div>
                                    </Col>
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">价格</div>
                                        <div className="text-ffc fon-18 fon-w-700 mt-10">¥999</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="user-card box-sd">
                            <div className="user-card-top bg-28a pd-21 pos-r">
                                <div className="user-name text-align pos-r text-white mb-20">
                                    <span className="fon-18 fon-w-700">Mellissa Doe</span>
                                    <Dropdown overlay={menu} trigger={['click']} arrow>
                                        <i className="iconfont icon-More pos-a top-0 right-0"></i>
                                    </Dropdown>
                                </div>
                                <div className="user-pic pos-a">
                                    <img src={Userpic} alt="" />
                                </div>
                            </div>
                            <div className="card-body bg-fff pd-21">
                                <div className="tag fon-13 text-626 text-align mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</div>
                                <ul className="contact-way">
                                    <li>
                                        <img src={Wx} alt="" />
                                    </li>
                                    <li>
                                        <img src={QQ} alt="" />
                                    </li>
                                </ul>
                                <Divider />
                                <Row className="mb-20 mt-30">
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">热销商品</div>
                                        <div className="text-28a fon-18 fon-w-700 mt-10">电脑</div>
                                    </Col>
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">销量</div>
                                        <div className="text-dc3 fon-18 fon-w-700 mt-10">销量</div>
                                    </Col>
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">价格</div>
                                        <div className="text-ffc fon-18 fon-w-700 mt-10">¥999</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="user-card box-sd">
                            <div className="user-card-top bg-28a pd-21 pos-r">
                                <div className="user-name text-align pos-r text-white mb-20">
                                    <span className="fon-18 fon-w-700">Mellissa Doe</span>
                                    <Dropdown overlay={menu} trigger={['click']} arrow>
                                        <i className="iconfont icon-More pos-a top-0 right-0"></i>
                                    </Dropdown>
                                </div>
                                <div className="user-pic pos-a">
                                    <img src={Userpic} alt="" />
                                </div>
                            </div>
                            <div className="card-body bg-fff pd-21">
                                <div className="tag fon-13 text-626 text-align mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</div>
                                <ul className="contact-way">
                                    <li>
                                        <img src={Wx} alt="" />
                                    </li>
                                    <li>
                                        <img src={QQ} alt="" />
                                    </li>
                                </ul>
                                <Divider />
                                <Row className="mb-20 mt-30">
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">热销商品</div>
                                        <div className="text-28a fon-18 fon-w-700 mt-10">电脑</div>
                                    </Col>
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">销量</div>
                                        <div className="text-dc3 fon-18 fon-w-700 mt-10">销量</div>
                                    </Col>
                                    <Col span={8} className="text-align">
                                        <div className="fon-w-700 col-626 fon-13 ">价格</div>
                                        <div className="text-ffc fon-18 fon-w-700 mt-10">¥999</div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span="24">
                        <div className="pagination w100 box-sd pd-17 bg-fff text-align">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Users;