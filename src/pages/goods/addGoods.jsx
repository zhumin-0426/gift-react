import React from 'react';
// 样式
import AddGoodsCssMoudle from '../../css/addGoods.module.css';
import UploadIcon from '../../assets/icon/upload.png';
// antd 组件
import { Row, Col, Breadcrumb, Form, Input, Radio,Button} from 'antd';
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
            picLibraryStatus: false,
            // 商品规格
            goodsStyle: 'single',
             spec: false,
             specName: "",
             specVal: "",
             specAttrList: [],
             newSpecVal: "",
             newSpecValIndex: 0
        }
        this.prevStepEvent = this.prevStepEvent.bind(this);
        this.nextStepEvent = this.nextStepEvent.bind(this);
        this.radioHandle = this.radioHandle.bind(this);
        this.picLibraryBackStatus = this.picLibraryBackStatus.bind(this);
        this.picLibraryStatusChange = this.picLibraryStatusChange.bind(this);
        this.addSpec = this.addSpec.bind(this);
        this.specConfirm = this.specConfirm.bind(this);
        this.specCancel = this.specCancel.bind(this);
        this.iptHandle = this.iptHandle.bind(this);
        this.addSpecVal = this.addSpecVal.bind(this);
        this.countSum = this.countSum.bind(this);
        this.getSpecAttr = this.getSpecAttr.bind(this);
        this.showTd = this.showTd.bind(this);
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
    // 输入框
    iptHandle(e, index) {
        let val = e.target.value;
        console.log("name", e.target.name)
        this.setState({
            [e.target.name]: val,
            newSpecValIndex: index
        })
    }
    // 单选按钮
    radioHandle(name, e) {
        console.log('name', name);
        console.log('radio1 checked', e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
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
     // 商品规格=>添加
     addSpec() {
        this.setState({
            spec: true
        })
    }
    // 商品规格=> 确认
    specConfirm() {
        let specAttrList = this.state.specAttrList;
        let attrObj = {
            specName: this.state.specName,
            children: [
                { attr: this.state.specVal }
            ]
        }
        specAttrList.push(attrObj)
        this.setState({
            spec: false,
            specAttrList: specAttrList,
            specName: "",
            specVal: "",
        })
        console.log('specAttrList', specAttrList)
    }
    // 商品规格=> 取消
    specCancel() {
        this.setState({
            spec: false
        })
    }
    // 添加规格值
    addSpecVal(index) {
        if (this.state.newSpecVal != "" && this.state.newSpecValIndex === index) {
            let specAttrList = this.state.specAttrList;
            specAttrList[index].children.push({ attr: this.state.newSpecVal })
            this.setState({ specAttrList: specAttrList, newSpecVal: "" })
        } else {
            alert("您为空")
        }
    }
    // 计算属性的乘积(获取配对的可能性)
    countSum(specIndex) {
        console.log("specList", this.state.specAttrList);
        let num = 1;
        this.state.specAttrList.forEach((item, index) => {
            if (index >= specIndex && item.children.length) {
                num *= item.children.length;
            }
        });
        return num;
    }
    /**
     * 根据传入的属性值，拿到相应规格的属性
     * @param specIndex
     * @param index 所有属性在遍历时的序号
     * @returns {string}
     */
    getSpecAttr(specIndex, index) {
        // 获取当前规格项目下的属性值
        let specAttrList = this.state.specAttrList;
        const currentValues = specAttrList[specIndex].children;
        // 判断是否是最后一个规格项目
        let indexCopy = (specAttrList[specIndex + 1] && specAttrList[specIndex + 1].children.length)
            ? index / this.countSum(specIndex + 1)
            : index;
        const i = Math.floor(indexCopy % currentValues.length);
        return (i.toString() !== 'NaN') ? currentValues[i] : '';
    }
    /**
      * 根据传入的条件，来判断是否显示该td
      * [如果当前项目下没有属性，则不显示]
      * @param specIndex
      * @param index
      * @returns {boolean}
      */
    showTd(specIndex, index) {
        if (!this.state.specAttrList[specIndex]) {
            return false;
        } else if (index % this.countSum(specIndex + 1) === 0) {
            return true;
        } else {
            return false;
        }
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
        // 规格按钮
        let specBtn
        if (this.state.spec) {
            specBtn = <div className="spec-btn-box dis-flx">
                <Form.Item>
                    <Button size="small" block onClick={this.specCancel}>取消</Button>
                </Form.Item>
                <Form.Item>
                    <Button size="small" type="primary" onClick={this.specConfirm} style={{ marginLeft: "15px" }}>确定</Button>
                </Form.Item>
            </div>
        } else {
            specBtn = <div className="spec-btn-box">
                <Form.Item>
                    <Button onClick={this.addSpec}>添加规格</Button>
                </Form.Item>
            </div>
        }
        // 规格属性
        let specAttrList = this.state.specAttrList;
        let specAttrNodesItem = specAttrList.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <div className="spec-attr-box">
                        <div className="name">
                            {item.specName}
                            <div className="delete-cover"></div>
                        </div>
                        <div className="val-box">
                            {item.children.map((attrValItem, attrIndexItem) => {
                                return (
                                    <React.Fragment key={attrIndexItem}>
                                        <ul>
                                            <li className="val">
                                                {attrValItem.attr}
                                                <div className="delete-cover"></div>
                                            </li>
                                        </ul>
                                    </React.Fragment>
                                )
                            })}
                            <div className="add-val-box">
                                <input name="newSpecVal" onChange={(e) => this.iptHandle(e, index)} />
                                <div className="btn" onClick={() => this.addSpecVal(index)}>添加</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
        // 规格表格
        let renderSpec = []
        // 表格合并
        for (let i = 0; i < this.countSum(0); i++) {
            renderSpec.push(
                <tr className="spec-table-tbody-tr" key={i}>
                    {this.state.specAttrList.length > 0 && this.state.specAttrList.map((item, index) => {
                        if (this.showTd(index, i)) {
                            let tagName = this.getSpecAttr(index, i);
                            let n = index + 1;
                            let rowSpan = this.countSum(n);
                            return <td className="spec-table-tbody-td" rowSpan={rowSpan} key={index}>{tagName.attr}</td>
                        }
                    })}
                    <td className="spec-table-tbody-td">
                        <div className="img" onClick={this.picLibraryStatusChange}>+</div>
                    </td>
                    <td className="spec-table-tbody-td">
                        <input className="ipt" type="number" />
                    </td>
                    <td className="spec-table-tbody-td">
                        <input className="ipt" type="number" />
                    </td>
                    <td className="spec-table-tbody-td">
                        <input className="ipt" type="number" />
                    </td>
                    <td className="spec-table-tbody-td">
                        <input className="ipt" type="number" />
                    </td>
                </tr>
            )
        }
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
                            <Radio.Group name="goodsStyle" options={goodsStyleOptions} onChange={(e) => this.radioHandle("goodsStyle", e)} defaultValue={this.state.goodsStyle} />
                        </Form.Item>
                        <div className={this.state.goodsStyle === 'double' ? 'goods-spec-active pd-20 mb-30' : "goods-spec pd-20 mb-30"}>
                            {/* 多规格属性 */}
                            {specAttrNodesItem}
                            {/* 多规格输入框 */}
                            <div className={this.state.spec ? "spec-box-active" : "spec-box"}>
                                <Form.Item label="规格名" name="specName" rules={[{ required: true, message: '亲，您还没有输入规格名称哦！' }]}>
                                    <Input style={{ width: "30%" }} name="specName" placeholder="请输入规格名称" onChange={(e) => this.iptHandle(e)} />
                                </Form.Item>
                                <Form.Item label="规格值" name="specVal" rules={[{ required: true, message: '亲，您还没有输入规格名称哦！' }]}>
                                    <Input style={{ width: "30%" }} name="specVal" placeholder="请输入规格值" onChange={(e) => this.iptHandle(e)} />
                                </Form.Item>
                            </div>
                            {/* 多规格按钮 */}
                            {specBtn}
                            {/* 多规格表格 */}
                            <table className="spec-table">
                                <thead align="center">
                                    <tr className="spec-table-thead-tr">
                                        {specAttrList.map((item, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <th className="spec-table-thead-th">{item.specName}</th>
                                                </React.Fragment>
                                            )
                                        })}
                                        <th className="spec-table-thead-th">规格图片</th>
                                        <th className="spec-table-thead-th">商品价格</th>
                                        <th className="spec-table-thead-th">划线价格</th>
                                        <th className="spec-table-thead-th">库存</th>
                                        <th className="spec-table-thead-th">销量</th>
                                    </tr>
                                </thead>
                                <tbody align="center">
                                    {renderSpec}
                                </tbody>
                            </table>
                        </div>
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