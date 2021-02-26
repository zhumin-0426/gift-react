import React from 'react';
// 样式
import '../css/goodsDetail.less';
import GoodsImg from '../assets/images/product-4.jpg';
// antd 组件
import { Row, Col, Breadcrumb, Rate } from 'antd';

class Describe extends React.Component {
    render(){
        return(
            <div className="tab-obj pd-17">
                这是坨屎
            </div>
        )
    }
}
class Comments extends React.Component {
    render() {
        return (
            <div className="tab-obj pd-17">
                <ul>
                    <li className="tab-obj-item dis-flx">
                        <div className="reviews-user-pic mr-20">
                            <img className="dis-block" src={GoodsImg} alt="" />
                        </div>
                        <div className="reviews pd-15 ">
                            <p>
                                <strong className="fon-w-700 fon-16 text-626">Melissa</strong>
                                <span className="fon-w-500 text-626"> - July 5, 2018</span>
                            </p>
                            <Rate className="text-84b fon-15 mt-10 mb-10" allowHalf defaultValue={2.5} />
                            <p className="fon-w-500 text-626">Al-Alif and Company was established with the goal of selling the finest hookah products available</p>
                        </div>
                    </li>
                    <li className="tab-obj-item dis-flx">
                        <div className="reviews-user-pic mr-20">
                            <img className="dis-block" src={GoodsImg} alt="" />
                        </div>
                        <div className="reviews pd-15 ">
                            <p>
                                <strong className="fon-w-700 fon-16 text-626">Melissa</strong>
                                <span className="fon-w-500 text-626"> - July 5, 2018</span>
                            </p>
                            <Rate className="text-84b fon-15 mt-10 mb-10" allowHalf defaultValue={2.5} />
                            <p className="fon-w-500 text-626">Al-Alif and Company was established with the goal of selling the finest hookah products available</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
class GoodsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabId: 1
        }
        this.tabChange = this.tabChange.bind(this);
    }
    tabChange(e) {
        this.setState({
            tabId: Number(e.target.dataset.id)
        })
    }
    render() {
        let tabObjMain
        switch (Number(this.state.tabId)) {
            case 1:
                tabObjMain = <Describe></Describe>;
                break;
            case 2:
                tabObjMain = <Comments></Comments>;
            default:
                break;
        }
        return (
            <div className="main">
                <Row>
                    <Col span={12}>
                        <h2>商品详情</h2>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>系统</Breadcrumb.Item>
                            <Breadcrumb.Item>商品详情</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="detail-card bg-fff pd-17 w100 box-sd">
                            <Row>
                                <Col span={8}>
                                    <img className="max-wid-100 dis-block" src={GoodsImg} alt="" />
                                </Col>
                                <Col span={16}>
                                    <h2 className="line-clamp2 goods-name mt-15 mb-15 fon-w-500">Apple® Watch Series 3 (GPS) 42mm</h2>
                                    <p className="fon-13 text-626">描述：Measure your workouts, from running and cycling to new high-intensity interval training. Track and share your daily activity, and get the motivation you need to hit your goals. Better manage everyday stress and monitor your heart rate more effectively.</p>
                                    <ul className="goods-attr">
                                        <li>
                                            <span className="attr-name fon-w-700 fon-15 text-626"><b>库存 :-</b></span>
                                            <span className="attr-name text-626">999</span>
                                        </li>
                                        <li>
                                            <span className="attr-name fon-w-700 fon-15 text-626"><b>类型 :-</b></span>
                                            <span className="attr-name text-626">科技产品</span>
                                        </li>
                                        <li>
                                            <span className="attr-name fon-w-700 fon-15 text-626"><b>价格 :-</b></span>
                                            <span className="attr-name text-626">$ 999</span>
                                        </li>
                                        <li>
                                            <span className="attr-name fon-w-700 fon-15 text-626"><b>销量 :-</b></span>
                                            <span className="attr-name text-626">999</span>
                                        </li>
                                        <li>
                                            <span className="attr-name fon-w-700 fon-15 text-626"><b>状态 :-</b></span>
                                            <span className="attr-name text-626">上架</span>
                                        </li>
                                        <li>
                                            <span className="attr-name fon-w-700 fon-15 text-626"><b>评分 :-</b></span>
                                            <Rate className="text-84b fon-15" allowHalf defaultValue={2.5} />
                                        </li>
                                    </ul>
                                    <div className="tab dis-flx align-items-center">
                                        <div className={this.state.tabId===1?'tab-item tab-item-active':'tab-item'} data-id={1} onClick={this.tabChange}>
                                            描述
                                        </div>
                                        <div className={this.state.tabId===2?'tab-item tab-item-active':'tab-item'} data-id={2} onClick={this.tabChange}>
                                            评论
                                        </div>
                                    </div>
                                    {tabObjMain}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default GoodsDetail;