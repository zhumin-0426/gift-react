import React from 'react';
// 样式
import '../../css/orderDetail.less';
import Logo from '../../assets/icon/logo.png';
// antd 组件
import { Row, Col, Breadcrumb } from 'antd';
class Order extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        return (
            <div className="main">
                        <Row>
                            <Col span={12}>
                                <h3><strong>订单详情</strong></h3>
                            </Col>
                            <Col span={12} className="text-align-right">
                                <Breadcrumb>
                                    <Breadcrumb.Item>系统</Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        订单详情
                                        </Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className="order-detail-card box-sd bg-fff pd-17">
                                    <div className="w100 mb-30 dis-flx align-items-center justify-space-between">
                                        <div className="mb-20">
                                            <img className="small-logo" src={Logo} alt="" />
                                        </div>
                                        <ul className="tool">
                                            <li className="pd-20 box-sd bg-fff">
                                                <i className="iconfont icon-xiazai1 fon-14 text-626"></i>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mb-14 w100 dis-flx align-items-center justify-space-between pb-14 bd-bottom">
                                        <h4 className="fon-22 mb-10">
                                            订单id:-12
                                        </h4>
                                        <h6 className="fon-16">
                                            订单日期:-2020-10-24
                                        </h6>
                                    </div>
                                    <div className="w100 dis-flx align-items-center justify-space-between bd-bottom">
                                        <Row className="w100">
                                            <Col span={12}>
                                                <h5 className="fon-18 mb-10">
                                                    发票信息
                                                </h5>
                                            </Col>
                                            <Col span={12}>
                                                <h5 className="fon-18">
                                                    送货地址
                                                </h5>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="w100 dis-flx align-items-center justify-space-between bd-bottom mt-15">
                                        <Row className="w100">
                                            <Col span={12}>
                                                <ul className="invoice-info">
                                                    <li>
                                                        <span className="text-626">订单状态</span>
                                                        <span className="fon-16 text-626">已付款</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">支付方式</span>
                                                        <span className="fon-16 text-626">微信支付</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">商品数量</span>
                                                        <span className="fon-16 text-626">14</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">价格</span>
                                                        <span className="fon-16 text-626">1400</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">运费</span>
                                                        <span className="fon-16 text-626">10</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">折扣</span>
                                                        <span className="fon-16 text-626">400</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">总额</span>
                                                        <span className="fon-16 text-626">990</span>
                                                    </li>
                                                </ul>
                                            </Col>
                                            <Col span={12}>
                                                <ul className="invoice-info">
                                                    <li>
                                                        <span className="text-626">名字</span>
                                                        <span className="fon-16 text-626">朱敏</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">地址</span>
                                                        <span className="fon-16 text-626">江西</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">城市</span>
                                                        <span className="fon-16 text-626">修水县</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">邮政编码</span>
                                                        <span className="fon-16 text-626">1400</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">电话</span>
                                                        <span className="fon-16 text-626">18820976789</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">邮件</span>
                                                        <span className="fon-16 text-626">400</span>
                                                    </li>
                                                    <li>
                                                        <span className="text-626">总额</span>
                                                        <span className="fon-16 text-626">990</span>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="mb-14 w100 pb-14">
                                        <table className="w100 table">
                                            <thead>
                                                <tr>
                                                    <th className="pd-15">商品编号</th>
                                                    <th>商品图片</th>
                                                    <th>商品名称</th>
                                                    <th>商品数量</th>
                                                    <th>单价</th>
                                                    <th>总额</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="pd-15">商品编号</td>
                                                    <td>商品图片</td>
                                                    <td>商品名称</td>
                                                    <td>商品数量</td>
                                                    <td>单价</td>
                                                    <td>总额</td>
                                                </tr>
                                                <tr>
                                                    <td className="pd-15">商品编号</td>
                                                    <td>商品图片</td>
                                                    <td>商品名称</td>
                                                    <td>商品数量</td>
                                                    <td>单价</td>
                                                    <td>总额</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Col>
                        </Row>
            </div>
        )
    }
}

export default Order;