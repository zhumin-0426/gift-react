import React from 'react';
import {Link} from 'react-router-dom';
// 样式
import GoodsCssModule from '../../css/goods.module.css';
// 图片
import GoodsImg from '../../assets/images/product-4.jpg';
// antd 组件
import { Row, Col, Breadcrumb, Pagination } from 'antd';
const Users = () => {
    return (
        <div className="main">
            {/* 标题导航 */}
            <Row>
                <Col span={12}>
                    <h3><strong>商品列表</strong></h3>
                </Col>
                <Col span={12} className="text-align-right">
                    <Breadcrumb>
                        <Breadcrumb.Item>系统</Breadcrumb.Item>
                        <Breadcrumb.Item>商品列表</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>
            {/* 搜索 */}
            <Row>
                <Col span={24}>
                    <div className={GoodsCssModule.search}>
                        <div className={GoodsCssModule.searchIcon}></div>
                        <input className={GoodsCssModule.searchIpt} type="text" placeholder="搜索商品..." />
                            <Link to="/addgoods">
                                <i className="addGoods iconfont icon-miaojieselleraddpic">
                                    商品添加
                                </i>
                            </Link>
                    </div>
                </Col>
            </Row>
            {/* 商品列表 */}
            <Row gutter={[30, 30]}>
                <Col span={6}>
                    <div className={GoodsCssModule.goodsCard}>
                        <div className="goods-img">
                            <img className="w100 dis-block" src={GoodsImg} alt="" />
                        </div>
                        <h2 className={GoodsCssModule.goodsName}>Apple® Watch Series 3 (GPS) 42mm</h2>
                        <p className="fon-13 text-626">简介：Measure your workouts, from running and cycling to new high-intensity interval training. Track and share your daily activity, and get the motivation you need to hit your goals. Better manage everyday stress and monitor your heart rate more effectively.</p>
                        <ul className="goods-attr">
                            <li>
                                <span className="attr-name fon-w-700 fon-15 text-626"><b>价格 :-</b></span>
                                <span className="attr-name text-626">$ 999</span>
                            </li>
                            <li className="mb-10 mt-10">
                                <span className="attr-name fon-w-700 fon-15 text-626"><b>销量 :-</b></span>
                                <span className="attr-name text-626">999</span>
                            </li>
                            <li>
                                <span className="attr-name fon-w-700 fon-15 text-626"><b>状态 :-</b></span>
                                <span className="attr-name text-626">上架</span>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span="24">
                    <div className="pagination box-sd pd-17 bg-fff text-align">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Users;