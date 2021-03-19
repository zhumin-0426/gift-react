import React from 'react';
// 样式
import AddGoodsCssMoudle from '../../css/addGoods.module.css';
import UploadIcon from '../../assets/icon/upload.png';
// antd 组件
import { Row, Col, Breadcrumb, Form, Input, Radio } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import Editor from 'react-umeditor';
// 图片库组件
import PicLibrary from '../../components/picLibrary';
const { TextArea } = Input;

class FromList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 编辑器
            content: "",
            // 图片库
            picLibraryStatus: false
        }
        this.prevStepEvent = this.prevStepEvent.bind(this);
        this.nextStepEvent = this.nextStepEvent.bind(this);
        this.radioHandle = this.radioHandle.bind(this);
        this.picLibraryBackStatus = this.picLibraryBackStatus.bind(this);
        this.picLibraryStatusChange = this.picLibraryStatusChange.bind(this);
    }
    // 上一步
    prevStepEvent() {
        var tabid = (Number(this.props.tabid) - 1) + '';
        this.props.childPassData(tabid)
    }
    // 下一步
    nextStepEvent() {
        var tabid = (Number(this.props.tabid) + 1) + '';
        this.props.childPassData(tabid)
    }
    // 单选按钮
    radioHandle(name, e) {
        console.log('name', name);
        console.log('radio1 checked', e.target.value);
    }
    // 编辑器
    handleChange(content) {
        this.setState({
            content: content
        })
    }
    getIcons() {
        var icons = [
            "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
            "paragraph fontfamily fontsize | superscript subscript | ",
            "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
            "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
            "horizontal date time  | image emotion spechars | inserttable"
        ]
        return icons;
    }
    getPlugins() {
        return {
            "image": {
                "uploader": {
                    "name": "file",
                    "url": "/api/upload"
                }
            }
        }
    }
    // 图片库=>数据返回
    picLibraryBackStatus(data) {
        this.setState({
            picLibraryStatus: !data
        })
    }
    picLibraryStatusChange() {
        this.setState({ picLibraryStatus: true });
    }
    render() {
        let tabid = this.props.tabid;
        // 商品规格
        const goodsStyleOptions = [
            { label: '单规格', value: 'single' },
            { label: '多规格', value: 'double' }
        ];
        // 表单提交
        const onFinish = (values) => {
            console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        // 编辑器
        var icons = this.getIcons();
        var plugins = this.getPlugins();
        return (
            <>
                {/* 图片库组件 */}
                {this.state.picLibraryStatus ? <PicLibrary picLibraryStatus={this.state.picLibraryStatus} picLibraryBackStatus={this.picLibraryBackStatus} /> : ''}
                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <div className={tabid === '0' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                        <Form.Item
                            label="商品名称"
                            name="goodsName"
                            rules={[
                                {
                                    required: true,
                                    message: '亲，您还没有输入商品名称哦!',
                                },
                            ]}
                        >
                            <Input placeholder="商品名称" />
                        </Form.Item>
                        <Form.Item
                            label="商品描述"
                            name="goodsDescribe"
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                            label="商品类别"
                            name="goodsType"
                        >
                            <select className="form-select w100" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </Form.Item>
                        <Form.Item
                            label="商品价格"
                            name="price"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="划线价格"
                            name="linePrice"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="商品规格" name="goodsStyle">
                            <Radio.Group options={goodsStyleOptions} onChange={(e) => this.radioHandle("goodsStyle", e)} />
                        </Form.Item>
                        <FormItem>
                            <div className="next-step-btn fon-13 pull-right" onClick={this.nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</div>
                        </FormItem>
                    </div>
                    <div className={tabid === '1' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                        <Form.Item>
                            <div className={AddGoodsCssMoudle.fromControlFile} onClick={this.picLibraryStatusChange}>
                                <img src={UploadIcon} alt="" />
                            </div>
                            <p className="text-align fon-13 text-626"> 上传图片</p>
                            <div className="prompt text-6c7 fon-12 mt-10">尺寸750x750像素比，大小2M以下</div>
                        </Form.Item>
                        <FormItem>
                            <div className="next-step-btn fon-13 pull-right" onClick={this.nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</div>
                            <div className="prev-step-btn mr-20 fon-13 pull-right" onClick={this.prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</div>
                        </FormItem>
                    </div>
                    <div className={tabid === '2' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                        <FormItem><Editor ref="editor"
                            icons={icons}
                            value={this.state.content} defaultValue="<p>React Umeditor</p>"
                            onChange={this.handleChange.bind(this)}
                            plugins={plugins} /></FormItem>
                        <FormItem>
                            <div className="next-step-btn fon-13 pull-right" onClick={this.nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</div>
                            <div className="prev-step-btn mr-20 fon-13 pull-right" onClick={this.prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</div>
                        </FormItem>
                    </div>
                    <div className={tabid === '3' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                        <Form.Item
                            label="销量"
                            name="sales"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="库存"
                            name="inventory"
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <button className="next-step-btn fon-13 pull-right"><i className="iconfont icon-save24 mr-10 fon-12"></i>提交</button>
                            <div className="prev-step-btn mr-20 fon-13 pull-right" onClick={this.prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</div>
                        </Form.Item>
                    </div>
                </Form>
            </>
        )
    }
}
class AddGoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabid: "0"
        }
        this.tabChangeEvent = this.tabChangeEvent.bind(this)
        this.childPassData = this.childPassData.bind(this)
    }
    // tab切换
    tabChangeEvent(e) {
        this.setState({
            tabid: e.target.dataset.tabid
        })
    }
    // 子组件传递数据
    childPassData(data) {
        this.setState({
            tabid: data
        })
    }
    render() {
        return (
            <div className="main">
                <Row>
                    <Col span={12}>
                        <h3><strong>添加商品</strong></h3>
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
                                <li className={this.state.tabid === "2" ? `${AddGoodsCssMoudle.tabItem} ${AddGoodsCssMoudle.tabItemActive}` : `${AddGoodsCssMoudle.tabItem}`} data-tabid="2" onClick={this.tabChangeEvent}>商品详情</li>
                                <li className={this.state.tabid === "3" ? `${AddGoodsCssMoudle.tabItem} ${AddGoodsCssMoudle.tabItemActive}` : `${AddGoodsCssMoudle.tabItem}`} data-tabid="3" onClick={this.tabChangeEvent}>商品数量</li>
                            </ul>
                            <div className={AddGoodsCssMoudle.tabObj}>
                                <FromList tabid={this.state.tabid} childPassData={this.childPassData} />
                            </div>
                        </div>
                    </Col >
                </Row >
            </div >
        )
    }
}

export default AddGoods;