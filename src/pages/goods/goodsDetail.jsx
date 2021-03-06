import React from 'react';
// 样式
import '../../css/goodsDetail.less';
import GoodsImg from '../../assets/images/product-4.jpg';
import UploadIcon from '../../assets/icon/upload.png';
// antd 组件
import { Row, Col, Breadcrumb, Rate, Divider, Form, Input, Upload, Radio, Button } from 'antd';
import ImgCrop from 'antd-img-crop';
import Editor from 'react-umeditor';
// 图片库组件
import PicLibrary from '../../components/picLibrary';
class Describe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [{
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }],
            goodsStyle: 'single',
            goodsInventoryCalculate: 'xd',
            // 编辑器
            content: "",
            goodsState: "shelves",
            // 图片库
            picLibraryStatus: false,
            // 规格
            spec: false,
            specName: "",
            specVal: "",
            specAttrList: [],
            newSpecVal: "",
            newSpecValIndex: 0
        }
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
    // 单选按钮
    radioHandle(name, e) {
        console.log('name', name);
        console.log('radio1 checked', e.target.value);
        console.log('e', e);
        this.setState({
            [e.target.name]: e.target.value
        })
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
        // 表单提交成功
        const onFinish = (values) => {
            console.log('Success:', values);
        };
        // 表单提交失败
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
        // 商品规格
        const goodsStyleOptions = [
            { label: '单规格', value: 'single' },
            { label: '多规格', value: 'double' }
        ];
        const goodsInventoryOptions = [
            { label: '下单减库存', value: 'xd' },
            { label: '付款减库存', value: 'fk' }
        ]
        const goodsStateOptions = [
            { label: '上架', value: 'shelves' },
            { label: '下架', value: 'theShelves' }
        ];
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
                <div className="tab-obj pd-17">
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>
                        <h3 className="page-set-title">基本信息</h3>
                        <Divider />
                        <Form.Item label="商品名称" name="goodsName">
                            <Input />
                        </Form.Item>
                        <Form.Item label="商品分类" name="goodsClassify">
                            <select className="form-select w100" name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                            </select>
                        </Form.Item>
                        <Form.Item label="商品图片" name="goodsPic">
                            <div className="fromControlFile" onClick={this.picLibraryStatusChange}>
                                <img src={UploadIcon} alt="" />
                                <p className="fon-13 text-626"> 添加图片</p>
                            </div>
                            <div className="prompt text-6c7 fon-12 mt-10">尺寸750x750像素比，大小2M以下</div>
                        </Form.Item>
                        <Form.Item label="商品描述" name="goodsPic">
                            <Input />
                            <div className="prompt text-6c7 fon-12 mt-10">选填，商品卖点简述，例如：此款商品美观大方 性价比较高 不容错过</div>
                        </Form.Item>
                        <h3 className="page-set-title">规格/库存</h3>
                        <Divider />
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
                        <div className="goodsStyleBox">
                            <Form.Item label="商品价格" name="goodsPrice">
                                <Input />
                            </Form.Item>
                            <Form.Item label="划线价格" name="goodsLineMoney">
                                <Input />
                            </Form.Item>
                            <Form.Item label="现有库存" name="goodsInventory">
                                <Input />
                            </Form.Item>
                            {/* <Form.Item label="商品已购数量" name="buyGoodsNum">
                                <Input />
                            </Form.Item> */}
                            <Form.Item label="库存计算" name="goodsInventoryCalculate">
                                <Radio.Group options={goodsInventoryOptions} onChange={(e) => this.radioHandle("goodsInventoryCalculate", e)} defaultValue={this.state.goodsInventoryCalculate} />
                            </Form.Item>
                        </div>
                        <h3 className="page-set-title">商品详情</h3>
                        <Divider />
                        <Editor ref="editor"
                            icons={icons}
                            value={this.state.content} defaultValue="<p>React Umeditor</p>"
                            onChange={this.handleChange.bind(this)}
                            plugins={plugins} />
                        <h3 className="page-set-title mt-20">其他</h3>
                        <Divider />
                        <Form.Item label="线上状态" name="goodsState">
                            <Radio.Group options={goodsStateOptions} onChange={(e) => this.radioHandle("goodsStyle", e)} defaultValue={this.state.goodsState} />
                        </Form.Item>
                        <Form.Item label="初始销量" name="originSales">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button className="pull-right" type="primary" htmlType="submit">保存</Button>
                        </Form.Item>
                    </Form>
                </div>
            </>
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
                        <h3><strong>商品详情</strong></h3>
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
                                        <div className={this.state.tabId === 1 ? 'tab-item tab-item-active' : 'tab-item'} data-id={1} onClick={this.tabChange}>
                                            详细
                                        </div>
                                        <div className={this.state.tabId === 2 ? 'tab-item tab-item-active' : 'tab-item'} data-id={2} onClick={this.tabChange}>
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