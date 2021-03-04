import React from 'react';
// 样式
import '../../css/404.less';
// 图片
import errorImg from '../../assets/images/error.png';
// antd 组件
import { Row, Col, Breadcrumb } from 'antd';
class ErrorPage extends React.Component {
    render() {
        return (
            <div className="main">
                {/* 标题导航 */}
                <Row>
                    <Col span={12}>
                        <h3><strong>404错误</strong></h3>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>错误</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="card pd-22 mt-22 bg-fff ">
                            <div className="card-body">
                                <div className="error">
                                    <h1>404</h1>
                                    <h2>error</h2>
                                </div>
                                <img src={errorImg}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default ErrorPage;