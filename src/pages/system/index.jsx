import React from 'react';
// 样式
import '../../css/system.module.css';
// antd 组件
import { Row, Col, Breadcrumb, Menu, Dropdown } from 'antd';
// Charts 组件
import { Column, Pie } from '@ant-design/charts';
class System extends React.Component {
    render() {
        const style = { background: '#fff' };
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        );
        var data = [
            {
                name: 'London',
                月份: 'Jan.',
                月均降雨量: 18.9,
            },
            {
                name: 'London',
                月份: 'Feb.',
                月均降雨量: 28.8,
            },
            {
                name: 'London',
                月份: 'Mar.',
                月均降雨量: 39.3,
            },
            {
                name: 'London',
                月份: 'Apr.',
                月均降雨量: 81.4,
            },
            {
                name: 'London',
                月份: 'May',
                月均降雨量: 47,
            },
            {
                name: 'London',
                月份: 'Jun.',
                月均降雨量: 20.3,
            },
            {
                name: 'London',
                月份: 'Jul.',
                月均降雨量: 24,
            },
            {
                name: 'London',
                月份: 'Aug.',
                月均降雨量: 35.6,
            },
            {
                name: 'Berlin',
                月份: 'Jan.',
                月均降雨量: 12.4,
            },
            {
                name: 'Berlin',
                月份: 'Feb.',
                月均降雨量: 23.2,
            },
            {
                name: 'Berlin',
                月份: 'Mar.',
                月均降雨量: 34.5,
            },
            {
                name: 'Berlin',
                月份: 'Apr.',
                月均降雨量: 99.7,
            },
            {
                name: 'Berlin',
                月份: 'May',
                月均降雨量: 52.6,
            },
            {
                name: 'Berlin',
                月份: 'Jun.',
                月均降雨量: 35.5,
            },
            {
                name: 'Berlin',
                月份: 'Jul.',
                月均降雨量: 37.4,
            },
            {
                name: 'Berlin',
                月份: 'Aug.',
                月均降雨量: 42.4,
            },
        ];
        var config = {
            data: data,
            height: 400,
            isGroup: true,
            xField: '月份',
            yField: '月均降雨量',
            seriesField: 'name',
            label: {
                position: 'middle',
                layout: [{ type: 'interval-adjust-position' }, { type: 'adjust-color' }],
            },
        };
        var data1 = [
            {
                type: '主页设计',
                value: 50,
            },
            {
                type: '分类二',
                value: 25,
            },
            {
                type: '分类三',
                value: 18,
            },
            {
                type: '分类四',
                value: 15,
            },
            {
                type: '分类五',
                value: 10,
            },
            {
                type: '其他',
                value: 5,
            },
        ];
        var config1 = {
            appendPadding: 10,
            data: data1,
            angleField: 'value',
            colorField: 'type',
            radius: 0.8,
            label: {
                type: 'outer',
                content: '{name} {percentage}',
            },
            interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
        };
        return (
            <div className="main">
                <Row className="content-title mb-10">
                    <Col span={12}>
                        <h3><strong>数据统计</strong></h3>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>系统</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                数据统计
                                    </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row gutter={[30, 30]}>
                    <Col className="gutter-row" span={6}>
                        <div className="car box-sd pd-17" style={style}>
                            <div className="car-top dis-flx align-items-center justify-space-between">
                                <div className="car-icon">
                                    <i className="iconfont icon-chart fon-44 text-dc3"></i>
                                </div>
                                <div className="car-data">
                                    <div className="car-data-title fon-14 text-343">访问</div>
                                    <div className="car-data-num fon-22 text-323 fon-w-500">100</div>
                                </div>
                            </div>
                            <div className="car-bottom dis-flx align-items-center pt-14 bd-top">
                                <i className="iconfont icon-exclamation text-6c7 mr-10"></i>
                                <span className="text-6c7">81% 低增长</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car box-sd pd-17" style={style}>
                            <div className="car-top dis-flx align-items-center justify-space-between">
                                <div className="car-icon">
                                    <i className="iconfont icon-shopping-cart fon-44 text-ffc"></i>
                                </div>
                                <div className="car-data">
                                    <div className="car-data-title fon-14 text-343">购买</div>
                                    <div className="car-data-num fon-22 text-323 fon-w-500">100</div>
                                </div>
                            </div>
                            <div className="car-bottom dis-flx align-items-center pt-14 bd-top">
                                <i className="iconfont icon-bookmark text-6c7 mr-10"></i>
                                <span className="text-6c7">81% 总销售额</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car box-sd pd-17" style={style}>
                            <div className="car-top dis-flx align-items-center justify-space-between">
                                <div className="car-icon">
                                    <i className="iconfont icon-dollar fon-44 text-28a"></i>
                                </div>
                                <div className="car-data">
                                    <div className="car-data-title fon-14 text-343">收入</div>
                                    <div className="car-data-num fon-22 text-323 fon-w-500">100</div>
                                </div>
                            </div>
                            <div className="car-bottom dis-flx align-items-center pt-14 bd-top">
                                <i className="iconfont icon-calendar text-6c7 mr-10"></i>
                                <span className="text-6c7">81% 每星期销售</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="car box-sd pd-17" style={style}>
                            <div className="car-top dis-flx align-items-center justify-space-between">
                                <div className="car-icon">
                                    <i className="iconfont icon-twitter fon-44 text-007"></i>
                                </div>
                                <div className="car-data">
                                    <div className="car-data-title fon-14 text-343">用户</div>
                                    <div className="car-data-num fon-22 text-323 fon-w-500">100</div>
                                </div>
                            </div>
                            <div className="car-bottom dis-flx align-items-center pt-14 bd-top">
                                <i className="iconfont icon-reload text-6c7 mr-10"></i>
                                <span className="text-6c7">81% 刚刚更新</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={30}>
                    <Col classNam="gutter-row" span={8}>
                        <div className="car bg-fff box-sd pd-17">
                            <div className="chart-top dis-flx align-items-center justify-space-between pb-14 bd-bottom mb-14">
                                <div className="title text-626 fon-w-500">市场描述</div>
                                <Dropdown overlay={menu} trigger={['click']} arrow>
                                    <i className="iconfont icon-More text-626"></i>
                                </Dropdown>
                            </div>
                            <Column {...config} />
                        </div>
                    </Col>
                    <Col classNam="gutter-row" span={16}>
                        <div className="car bg-fff box-sd pd-17">
                            <div className="chart-top dis-flx align-items-center justify-space-between pb-14 bd-bottom mb-14">
                                <div className="title text-626 fon-w-500">热点商品</div>
                                <Dropdown overlay={menu} trigger={['click']} arrow>
                                    <i className="iconfont icon-More text-626"></i>
                                </Dropdown>
                            </div>
                            <Pie {...config1} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default System;