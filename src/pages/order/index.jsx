import React from 'react';
import {Link} from 'react-router-dom';
// 样式
import '../../css/order.less';
// antd 组件
import { Row, Col, Breadcrumb } from 'antd';
class Order extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkList: [
                {
                    checked: false
                },
                {
                    checked: false
                },
                {
                    checked: false
                }
            ],
            isAllChecked: false
        }
        this.checkAll = this.checkAll.bind(this)
        this.checkOptionItem = this.checkOptionItem.bind(this)
    }
    // 全选
    checkAll(e) {
        let isAllChecked = e.target.checked;
        this.setState({ isAllChecked: isAllChecked });
        if (isAllChecked) {
            this.state.checkList.map((item) => {
                return item.checked = true
            })
        } else {
            this.state.checkList.map((item) => {
                return item.checked = false
            })
        }
    }
    // 单选
    checkOptionItem(e, index) {
        let checked = e.target.checked;
        let checkList = this.state.checkList;
        checkList[index].checked = checked;
        let bol = checkList.every((item) => {
            return item.checked === true
        })
        if (bol) {
            this.setState({ isAllChecked: true })
        } else {
            this.setState({ isAllChecked: false })
        }
        this.setState(checkList)
    }
    render() {
        let checkList = this.state.checkList;
        const orderNodesItem = checkList.map((item, index) => {
            return (
                <tr className="order-tr">
                    <td className="order-td"><input type="checkbox" onChange={(e) => this.checkOptionItem(e, index)} checked={item.checked ? true : false} /></td>
                    <td className="order-td">20210315531005310199</td>
                    <td className="order-td">已发货</td>
                    <td className="order-td">淘宝支付</td>
                    <td className="order-td over-flow">
                        <div className="pay-status bg-28a bor-rds-3 text-white pull-left fon-12"><strong>已支付</strong></div>
                    </td>
                    <td className="order-td">2021-03-15 08:43:49</td>
                    <td className="order-td">$ 400.00</td>
                    <td className="order-td dis-flx ">
                    <Link to="/orderdetail"><div className="editor"><i className="iconfont icon-bianji"></i></div></Link>
                        <div className="delete"><i className="iconfont icon-shanchudefuben"></i></div>
                        <div className="delivery"><i className="iconfont icon-fahuo_"></i></div>
                    </td>
                </tr>
            )
        })
        return (
            <div className="main">
                <Row>
                    <Col span={12}>
                        <h3><strong>订单列表</strong></h3>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>系统</Breadcrumb.Item>
                            <Breadcrumb.Item>订单列表</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="w100 table-list-card bg-fff box-sd pd-15">
                            <table className="order-table w100">
                                <thead className="order-thrad" align="left">
                                    <tr className="order-tr">
                                        <th className="order-th dis-flx align-items-center">
                                            <input type="checkbox" onChange={this.checkAll} checked={this.state.isAllChecked ? true : false} /><div className="ml-5">全部</div>
                                        </th>
                                        <th className="order-th">订单编号</th>
                                        <th className="order-th">订单状态</th>
                                        <th className="order-th">支付方式</th>
                                        <th className="order-th">支付状态</th>
                                        <th className="order-th">日期</th>
                                        <th className="order-th">实付款</th>
                                        <th className="order-th">操作</th>
                                    </tr>
                                </thead>
                                <tbody className="order-tbody" align="left">
                                    {orderNodesItem}
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Order;