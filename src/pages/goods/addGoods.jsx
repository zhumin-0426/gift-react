import React from 'react';
// 样式
import AddGoodsCssMoudle from '../css/addGoods.module.css';
import UploadIcon from '../assets/icon/upload.png';
// antd 组件
import { Row, Col, Breadcrumb } from 'antd';
// from表单
const FormHandle = (props) => {
    console.log("props", props);
    let tabid = props.tabid;
    const prevStepEvent = () => {
        var stepNum = this.state.tabid;
        if (Number(stepNum) !== 0) {
            this.setState({
                tabid: (Number(stepNum) - 1) + ''
            })
        }
    }
    const nextStepEvent = () => {
        var stepNum = this.state.tabid;
        console.log(stepNum)
        this.setState({
            tabid: (Number(stepNum) + 1) + ''
        })
    }
    return (
        <form action="">
            <div className={tabid === '0' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                <div className="form-item mb-15">
                    <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">商品名称</label>
                    <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入商品名称" />
                </div>
                <div className="form-item mb-15">
                    <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">商品描述</label>
                    <textarea className="ant-textarea fon-w-500 w100" name="" id="" cols="30" rows="10" placeholder="请输入商品描述"></textarea>
                </div>
                <div className="form-item">
                    <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">商品类别</label>
                    <select className="ant-select w100" name="" id="">
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                </div>
                <div className="form-item">
                    <div className="step-btn text-align-right mt-20 mb-20">
                        <button className="prev-step-btn mr-20 fon-13" onClick={prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</button>
                        <button className="next-step-btn fon-13" onClick={nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</button>
                    </div>
                </div>
            </div>
            <div className={tabid === '1' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                <div className="form-item upload-img">
                    <label htmlFor={AddGoodsCssMoudle.fromControlFile} className={AddGoodsCssMoudle.fromControlFile}>
                        <img src={UploadIcon} alt="" />
                    </label>
                    <p className="text-align fon-13 text-626"> 上传图片</p>
                    <input id={AddGoodsCssMoudle.fromControlFile} type="file" />
                </div>
                <div className="form-item">
                    <div className="step-btn text-align-right mt-20 mb-20">
                        <button className="prev-step-btn mr-20 fon-13" onClick={prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</button>
                        <button className="next-step-btn fon-13" onClick={nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</button>
                    </div>
                </div>
            </div>
            <div className={tabid === '2' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                <div className="form-item mb-15">
                    <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">划线价格</label>
                    <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入划线价格" />
                </div>
                <div className="form-item mb-15">
                    <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">实际价格</label>
                    <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入划线价格" />
                </div>
                <div className="form-item">
                    <div className="step-btn text-align-right mt-20 mb-20">
                        <button className="prev-step-btn mr-20 fon-13" onClick={prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</button>
                        <button className="next-step-btn fon-13" onClick={nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</button>
                    </div>
                </div>
            </div>
            <div className={tabid === '3' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                <div className="form-item mb-15">
                    <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">实际销量</label>
                    <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入实际销量" />
                </div>
                <div className="form-item mb-15">
                    <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">现有库存</label>
                    <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入现有库存" />
                </div>
                <div className="form-item">
                    <div className="step-btn text-align-right mt-20 mb-20">
                        <button className="prev-step-btn mr-20 fon-13" onClick={prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</button>
                        <button className="next-step-btn fon-13"><i className="iconfont icon-save24 mr-10 fon-12"></i>提交</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
class AddGoods extends React.Component {
    constructor(props) {
        super(props);
        this.tabChangeEvent = this.tabChangeEvent.bind(this);
        this.state = {
            tabid: "0"
        }
    }
    tabChangeEvent(e) {
        this.setState({
            tabid: e.target.dataset.tabid
        })
    }
    render() {
        return (
            <div className="main">
                <Row>
                    <Col span={12}>
                        <h2>添加商品</h2>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>系统</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                添加商品
                                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="add-goods-card bg-fff box-sd pd-17">
                            <ul className={AddGoodsCssMoudle.tab}>
                                <li className={this.state.tabid === "0" ? `${AddGoodsCssMoudle.tabItem} ${AddGoodsCssMoudle.tabItemActive}` : `${AddGoodsCssMoudle.tabItem}`} data-tabid="0" onClick={this.tabChangeEvent}>商品属性</li>
                                <li className={this.state.tabid === "1" ? `${AddGoodsCssMoudle.tabItem} ${AddGoodsCssMoudle.tabItemActive}` : `${AddGoodsCssMoudle.tabItem}`} data-tabid="1" onClick={this.tabChangeEvent}>商品图片</li>
                                <li className={this.state.tabid === "2" ? `${AddGoodsCssMoudle.tabItem} ${AddGoodsCssMoudle.tabItemActive}` : `${AddGoodsCssMoudle.tabItem}`} data-tabid="2" onClick={this.tabChangeEvent}>商品价格</li>
                                <li className={this.state.tabid === "3" ? `${AddGoodsCssMoudle.tabItem} ${AddGoodsCssMoudle.tabItemActive}` : `${AddGoodsCssMoudle.tabItem}`} data-tabid="3" onClick={this.tabChangeEvent}>商品数量</li>
                            </ul>
                            <div className={AddGoodsCssMoudle.tabObj}>
                                <FormHandle tabid={this.state.tabid} />
                            </div>
                        </div>
                    </Col >
                </Row >
            </div >
        )
    }
}

export default AddGoods;