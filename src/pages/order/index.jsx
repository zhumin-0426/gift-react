import React from 'react';
// 样式
import '../../css/order.less';
// antd 组件
import { Row, Col, Breadcrumb, Table, Tag } from 'antd';
class Order extends React.Component {
    state = {
        selectedRowKeys: [],
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
            },
            {
                title: '订单状态',
                dataIndex: 'status',
            },
            {
                title: '付款方式',
                dataIndex: 'payType',
            },
            {
                title: '支付状态',
                dataIndex: 'payStatus',
                render: payStatus => (
                    <>
                        {payStatus.map(payStatus => {
                            let color = payStatus.length > 5 ? 'geekblue' : 'green';
                            if (payStatus === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={payStatus}>
                                    {payStatus.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: '订单日期',
                dataIndex: 'orderDate',
            },
            {
                title: '总金额',
                dataIndex: 'totalMoney',
            },
            {
                title: '操作',
                dataIndex: 'action',
                render: action => (
                    <>
                        <div>btn</div>
                    </>
                )
            },
        ];

        const data = [];
        for (let i = 0; i < 20; i++) {
            data.push({
                key: i,
                id: i,
                status: `未支付 ${i}`,
                payStatus: ['nice' + i, 'developer' + i],
                payType: "微信支付",
                orderDate: `订单日期. ${i}`,
                totalMoney: i,
                action: "删除/编辑"
            });
        }
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                    key: 'odd',
                    text: 'Select Odd Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return false;
                            }
                            return true;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
                {
                    key: 'even',
                    text: 'Select Even Row',
                    onSelect: changableRowKeys => {
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                            if (index % 2 !== 0) {
                                return true;
                            }
                            return false;
                        });
                        this.setState({ selectedRowKeys: newSelectedRowKeys });
                    },
                },
            ],
        };
        return (
            <div className="main">
                <Row>
                    <Col span={12}>
                        <h2>订单列表</h2>
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
                        <div className="w100 table-list-card bg-fff box-sd">
                            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Order;