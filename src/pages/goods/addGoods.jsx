import React from 'react';
import axios from '../../common/js/axios'
// 样式
import AddGoodsCssMoudle from '../../css/addGoods.module.css';
import UploadIcon from '../../assets/icon/upload.png';
// antd 组件
import { Row, Col, Breadcrumb, Radio, Button } from 'antd';
import Editor from 'react-umeditor';
// 图片库组件
import PicLibrary from '../../components/picLibrary';
// 图片
import deleteGoodsPicIcon from '../../assets/images/delete-goods-pic-icon.png';

class FromList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 编辑器
            content: "",
            // 图片库
            picLibraryStatus: false,
            // 商品图片
            goodsPic: [],
            // 商品规格
            goodsStyle: 'single',
            spec: false,
            specName: "",
            specVal: "",
            specAttrList: [
                {
                    spec_name: "颜色",
                    children: [
                        { spec_val: "白色" },
                        { spec_val: "黄色" }
                    ]
                }
            ],
            newSpecVal: "",
            newSpecValIndex: 0,
            dkejSpecArr: [],
            // 商品状态
            goodsStatus: "lineTop",
            // 库存计算方式
            inventoryCount: "order"
        }
        this.prevStepEvent = this.prevStepEvent.bind(this);
        this.nextStepEvent = this.nextStepEvent.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.picLibraryBackData = this.picLibraryBackData.bind(this);
        this.picLibraryStatusChange = this.picLibraryStatusChange.bind(this);
        this.addSpec = this.addSpec.bind(this);
        this.specConfirm = this.specConfirm.bind(this);
        this.specCancel = this.specCancel.bind(this);
        this.iptHandle = this.iptHandle.bind(this);
        this.addSpecVal = this.addSpecVal.bind(this);
        this.converter = this.converter.bind(this);
        this.deleteSpec = this.deleteSpec.bind(this);
        this.deleteSpecVal = this.deleteSpecVal.bind(this)
    }
    // 上一步
    prevStepEvent() {
        var tabid = (Number(this.props.tabid) - 1).toString();
        this.props.childPassData(tabid)
    }
    // 下一步
    nextStepEvent() {
        var tabid = (Number(this.props.tabid) + 1).toString();
        this.props.childPassData(tabid)
    }
    // 输入框
    iptHandle(e, index) {
        console.log("")
        let val = e.target.value;
        this.setState({
            [e.target.name]: val,
            newSpecValIndex: index
        })
    }
    /**
     * 规格表格input改变
     * @event 目标对象
     * @name 需要改变的参数判断
     * @index 下标
    */
    specIptChange(event, name, index) {
        const dkejSpecArr = this.state.dkejSpecArr;
        const specAttrList = this.state.specAttrList;
        const specArr = this.converter(specAttrList);
        let mateArr = [];
        for (let i = 0; i < specArr.length; i++) {
            mateArr[i] = [];
            if (specArr[i].length) {
                for (let x = 0; x < specArr[i].length; x++) {
                    mateArr[i][x] = specArr[i][x].spec_val
                }
            } else {
                mateArr[i][0] = specArr[i].spec_val
            }
        }
        let obj = {}
        for (let k = 0; k < mateArr.length; k++) {
            obj = {
                mateArr: mateArr[k],
                mateData: {
                    specGoodsPrice: name === 'specGoodsPrice' ? event.target.value : '',
                    specGoodsLinePrice: name === 'specGoodsLinePrice' ? event.target.value : '',
                    specGoodsInventory: name === 'specGoodsInventory' ? event.target.value : '',
                    specGoodsSalse: name === 'specGoodsSalse' ? event.target.value : ''
                }
            }
        }
        dkejSpecArr[index] = obj;
        this.setState(dkejSpecArr);
        console.log('dkejSpecArr', dkejSpecArr)
    }
    // 单选按钮
    radioChange(e, name) {
        switch (name) {
            case 'goodsStyle':
                this.setState({
                    goodsStyle: e.target.value
                })
                break;
            case 'goodsStatus':
                this.setState({
                    goodsStatus: e.target.value
                })
                break;
            case 'inventoryCount':
                this.setState({
                    inventoryCount: e.target.value
                })
                break;
        }
    }
    // 编辑器
    handleChange(content) {
        this.setState({
            content: content
        }, () => {
            console.log('content', this.state.content)
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
                    "url": "/api/goods/goodsDetail",
                    "filter": function (res) {
                        return res.picUrl
                    }
                }
            }
        }
    }
    /**
     *笛卡尔积转换器
    */
    converter(spec_arr) {
        //编辑原数组格式
        console.log(spec_arr)
        if (spec_arr.length > 0) {
            if (spec_arr[0].children) {
                spec_arr = spec_arr.map((item) => {
                    return item = item.children
                })
            }
            if (spec_arr.length === 1) {
                return spec_arr[0];
            } else {
                let arrySon = [];
                //将组合放到新数组中
                spec_arr[0].forEach((_, index) => {
                    spec_arr[1].forEach((_, index1) => {
                        arrySon.push([].concat(spec_arr[0][index], spec_arr[1][index1]));
                    })
                })
                // 新数组并入原数组,去除合并的前两个数组
                spec_arr[0] = arrySon;
                spec_arr.splice(1, 1);
                // 递归
                return this.converter(spec_arr);
            }
        }
    }
    /**
     * @picLibraryStatus true/false 显示/隐藏
    */
    picLibraryBackData(picLibraryStatus, goodsPic) {
        let newGoodsPic = this.state.goodsPic;
        goodsPic.forEach(item => newGoodsPic.push(item));
        this.setState({
            picLibraryStatus: !picLibraryStatus,
            goodsPic: newGoodsPic
        })
    }
    picLibraryStatusChange() {
        this.setState({ picLibraryStatus: true });
    }
    /**
    * 删除商品图片
    * @e 目标对象
    * @index 数组索引值 
    * @goodPic 存储图片的数组
    * */
    delGoodsPic(e, index) {
        let goodPic = this.state.goodsPic;
        goodPic.splice(index, 1);
        this.setState(goodPic)
    }
    /**
       *商品规格=>添加
       *@spec false/true 显示/隐藏
    */
    addSpec() {
        this.setState({
            spec: true
        })
    }
    /**
     * 商品规格=>删除
    */
    deleteSpec(e, index) {
        let specAttrList = this.state.specAttrList;
        specAttrList.splice(index, 1);
        this.setState(specAttrList)
    }
    /**
       *商品规格=>添加=>确认按钮
       *@specAttrList 规格属性集合
       *@specName 规格名称
       *@specVal 规格值
    */
    specConfirm() {
        let specAttrList = this.state.specAttrList;
        let attrObj = {
            spec_name: this.state.specName,
            children: [
                { spec_val: this.state.specVal }
            ]
        }
        specAttrList.push(attrObj)
        this.setState({
            spec: false,
            specAttrList: specAttrList,
            specName: '',
            specVal: ''
        })
    }
    /**
     * 商品规格=> 取消
     * @spec false/true 显示/隐藏
    */
    specCancel() {
        this.setState({
            spec: false
        })
    }
    /** 
     *添加规格值
     *@newSpecVal 添加的规格值
     *@newSpecValIndex 当前规格属性的下标
     *@specAttrList 规格集合
    */
    addSpecVal(index) {
        if (this.state.newSpecVal !== "" && this.state.newSpecValIndex === index) {
            let specAttrList = this.state.specAttrList;
            specAttrList[index].children.push({ spec_val: this.state.newSpecVal })
            this.setState({ specAttrList: specAttrList, newSpecVal: '' })
        } else {
            alert("请输入您的规格值！")
        }
    }
    deleteSpecVal(e, index, attrIndexItem) {
        let specAttrList = this.state.specAttrList;
        specAttrList[index].children.splice(attrIndexItem, 1);
        this.setState(specAttrList)
    }
    render() {
        const tabid = this.props.tabid;
        const spec = this.state.spec;
        const specAttrList = this.state.specAttrList;
        const icons = this.getIcons();
        const plugins = this.getPlugins();
        /**
            *规格按钮渲染
            *@spec false/true => 显示/隐藏
        */
        let specBtnRender
        if (spec) {
            specBtnRender = <div className="spec-btn-box dis-flx mb-10">
                <div className="form-item">
                    <Button size="small" block onClick={this.specCancel}>取消</Button>
                </div>
                <div className="form-item">
                    <Button size="small" type="primary" onClick={this.specConfirm} style={{ marginLeft: "15px" }}>确定</Button>
                </div>
            </div>
        } else {
            specBtnRender = <div className="spec-btn-box">
                <div className="form-item mb-10">
                    <Button onClick={this.addSpec}>添加规格</Button>
                </div>
            </div>
        }
        /**
         * 规格渲染
         * @specAttrList 规格集合
         */
        let specAttrNodesItem = specAttrList.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    <div className="spec-attr-box">
                        <div className="name">
                            {item.spec_name}
                            <div className="delete-cover" onClick={(e) => this.deleteSpec(e, index)}></div>
                        </div>
                        <div className="val-box">
                            {item.children.map((attrValItem, attrIndexItem) => {
                                return (
                                    <React.Fragment key={attrIndexItem}>
                                        <ul>
                                            <li className="val">
                                                {attrValItem.spec_val}
                                                <div className="delete-cover" onClick={(e) => this.deleteSpecVal(e, index, attrIndexItem)}></div>
                                            </li>
                                        </ul>
                                    </React.Fragment>
                                )
                            })}
                            <div className="add-val-box">
                                <input name="newSpecVal" value={this.state.newSpecVal} onChange={(e) => this.iptHandle(e, index)} />
                                <div className="btn" onClick={() => this.addSpecVal(index)}>添加</div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
        //  笛卡尔积转换
        let specArr = this.converter(specAttrList);
        console.log('笛卡尔积转换', specArr)
        // 合并单元格
        let tdRow
        if (specArr !== undefined) {
            let row = [];
            let rowSpan = specArr.length;
            for (let n = 0; n < specAttrList.length; n++) {
                row[n] = parseInt(rowSpan / specAttrList[n].children.length)
                rowSpan = row[n]
            }
            console.log('row', row)
            // 表格数据渲染
            tdRow = i => specAttrList.map((_, j) => {
                let td;
                if (i % row[j] === 0 && row[j] > 1) {
                    td = <td className="spec-table-tbody-td" rowSpan={row[j]} key={j}>{specArr[i][j].spec_val}</td>
                } else if (row[j] === 1) {
                    specArr[i] instanceof Array ? td = <td className="spec-table-tbody-td" key={j}>{specArr[i][j].spec_val}</td> : td = <td className="spec-table-tbody-td" key={j}>{specArr[i].spec_val}</td>
                }
                return td
            })
        }
        return (
            <>
                {/* 图片库组件 */}
                {this.state.picLibraryStatus ? <PicLibrary picLibraryStatus={this.state.picLibraryStatus} picLibraryBackData={this.picLibraryBackData} /> : null}
                <form>
                    {/* 商品属性 */}
                    <div className={tabid === '0' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                        <div className="form-item mb-20">
                            <label className="dis-block mb-10 text-626">商品名称&nbsp;*</label>
                            <input className="form-input w100" name="goodsName" />
                        </div>
                        <div className="form-item mb-20">
                            <label className="dis-block mb-10 text-626">商品描述&nbsp;*</label>
                            <textarea name="goodsDescribe" className="form-textarea w100" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-item mb-20">
                            <label className="dis-block mb-10 text-626">商品类别&nbsp;*</label>
                            <select className="form-select w100" name="goodsType">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div className="form-item dis-flx align-content-center mb-20">
                            <div className="title">商品规格：</div>
                            <div className="form-item-radio dis-flx align-items-center">
                                <Radio value="single" checked={this.state.goodsStyle === 'single' ? true : false} onChange={(e) => this.radioChange(e, 'goodsStyle')} id="single" style={{ marginRight: "5px" }} >单规格</Radio>
                            </div>
                            <div className="form-item-radio  dis-flx align-items-center ml-5">
                                <Radio value="double" checked={this.state.goodsStyle === 'double' ? true : false} id="double" style={{ marginRight: "5px" }} onChange={(e) => this.radioChange(e, 'goodsStyle')} >多规格</Radio>
                            </div>
                        </div>
                        {/* 单规格 */}
                        <div className={this.state.goodsStyle === 'single' ? 'goods-spec-active pd-20 mb-30' : "goods-spec pd-20 mb-30"}>
                            <div className="form-item mb-20">
                                <label className="dis-block mb-10 text-626">商品价格&nbsp;*</label>
                                <input className="form-input w100" name="goodsPrice" />
                            </div>
                            <div className="form-item mb-20">
                                <label className="dis-block mb-10 text-626">划线价格&nbsp;*</label>
                                <input className="form-input w100" name="linePrice" />
                            </div>
                            <div className="form-item mb-20 text-626">
                                <label className="dis-block mb-10 text-626">销量&nbsp;*</label>
                                <input className="form-input w100" name="sales" />
                            </div>
                            <div className="form-item mb-20">
                                <label className="dis-block mb-10 text-626">库存&nbsp;*</label>
                                <input className="form-input w100" name="inventory" />
                            </div>
                        </div>
                        {/* 多规格 */}
                        <div className={this.state.goodsStyle === 'double' ? 'goods-spec-active pd-20 mb-30' : "goods-spec pd-20 mb-30"}>
                            {/* 多规格属性 */}
                            {specAttrNodesItem}
                            {/* 
                            *多规格输入框 
                            *@spec fase/true 显示/隐藏
                            */}
                            <div className={this.state.spec ? "spec-box-active mb-20" : "spec-box"}>
                                <div className="form-item">
                                    <label className="mr-10">规格名</label>
                                    <input className="form-input w100 mb-20" name="specName" value={this.state.specName} placeholder="请输入规格名称" style={{ width: "20%" }} onChange={(e) => this.iptHandle(e)} />
                                </div>
                                <div className="form-item">
                                    <label className="mr-10">规格值</label>
                                    <input className="form-input w100" name="specVal" value={this.state.specVal} placeholder="请输入规格值" style={{ width: "20%" }} onChange={(e) => this.iptHandle(e)} />
                                </div>
                            </div>
                            {/* 多规格按钮 */}
                            {specBtnRender}
                            {/* 
                            *多规格表格
                            *@specAttrList 规格集合
                             */}
                            {
                                specAttrList.length === 0 ? null : <table className="spec-table">
                                    <thead align="center">
                                        <tr className="spec-table-thead-tr">
                                            {specAttrList.map((item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <th className="spec-table-thead-th">{item.spec_name}</th>
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
                                        {
                                            specArr === undefined ? null : specArr.map((_, idx) => {
                                                return (
                                                    <tr className="spec-table-tbody-tr" key={idx}>
                                                        {
                                                            tdRow(idx)
                                                        }
                                                        <td className="spec-table-tbody-td">
                                                            <div className="img" onClick={this.picLibraryStatusChange}>+</div>
                                                        </td>
                                                        <td className="spec-table-tbody-td">
                                                            <input className="ipt" type="number" onChange={(e) => this.specIptChange(e, 'specGoodsPrice', idx)} />
                                                        </td>
                                                        <td className="spec-table-tbody-td">
                                                            <input className="ipt" type="number" onChange={(e) => this.specIptChange(e, 'specGoodsLinePrice', idx)} />
                                                        </td>
                                                        <td className="spec-table-tbody-td">
                                                            <input className="ipt" type="number" onChange={(e) => this.specIptChange(e, 'specGoodsInventory', idx)} />
                                                        </td>
                                                        <td className="spec-table-tbody-td">
                                                            <input className="ipt" type="number" onChange={(e) => this.specIptChange(e, 'specGoodsSalse', idx)} />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            }
                        </div>
                        <div className="form-item over-flow">
                            <div className="next-step-btn fon-13 pull-right" onClick={this.nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</div>
                        </div>
                    </div>
                    {/* 商品图片 */}
                    <div className={tabid === '1' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                        <ul className="goods-pic-box mb-20">
                            {
                                this.state.goodsPic.length > 0 ? this.state.goodsPic.map((item, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <li className="goods-pic-box-item mr-10">
                                                <div className="goods-pic" style={{ backgroundImage: "url(" + 'http://127.0.0.1:8888/' + item + ")" }}></div>
                                                <div className="goods-pic-cover" onClick={(e) => this.delGoodsPic(e, index)}>
                                                    <img src={deleteGoodsPicIcon} alt="" />
                                                </div>
                                            </li>
                                        </React.Fragment>
                                    )
                                }) : null
                            }
                        </ul>
                        <div className="form-item mb-20">
                            <div className={AddGoodsCssMoudle.fromControlFile} onClick={this.picLibraryStatusChange}>
                                <img src={UploadIcon} alt="" />
                            </div>
                            <p className="text-align fon-13 text-626"> 上传图片</p>
                            <div className="prompt text-6c7 fon-12">尺寸750x750像素比，大小2M以下</div>
                        </div>
                        <div className="form-item over-flow">
                            <div className="next-step-btn fon-13 pull-right" onClick={this.nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</div>
                            <div className="prev-step-btn mr-20 fon-13 pull-right" onClick={this.prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</div>
                        </div>
                    </div>
                    {/* 商品详情 */}
                    <div className={tabid === '2' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                        <div className="form-item mb-20">
                            <Editor ref="editor"
                                icons={icons}
                                value={this.state.content}
                                onChange={this.handleChange.bind(this)}
                                plugins={plugins} />
                        </div>
                        <div className="form-item over-flow">
                            <div className="next-step-btn fon-13 pull-right" onClick={this.nextStepEvent}><i className="iconfont icon-longarrowright mr-10 fon-12"></i>下一步</div>
                            <div className="prev-step-btn mr-20 fon-13 pull-right" onClick={this.prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</div>
                        </div>
                    </div>
                    {/* 商品数量 */}
                    <div className={tabid === '3' ? `${AddGoodsCssMoudle.active} ${AddGoodsCssMoudle.tabObjItem}` : `${AddGoodsCssMoudle.tabObjItem}`}>
                        <div className="form-item dis-flx align-content-center mb-20">
                            {/* <label className="dis-block mb-10 text-626">商品状态&nbsp;*</label>
                            <input className="form-input w100" name="sales" /> */}
                            <div className="title">商品状态：</div>
                            <div className="form-item-radio dis-flx align-items-center">
                                <Radio value="lineTop" checked={this.state.goodsStatus === 'lineTop' ? true : false} onChange={(e) => this.radioChange(e, 'goodsStatus')} style={{ marginRight: "5px" }} >上架</Radio>
                            </div>
                            <div className="form-item-radio  dis-flx align-items-center ml-5">
                                <Radio value="lineBottom" checked={this.state.goodsStatus === 'lineBottom' ? true : false} style={{ marginRight: "5px" }} onChange={(e) => this.radioChange(e, 'goodsStatus')} >下架</Radio>
                            </div>
                        </div>
                        <div className="form-item dis-flx align-content-center mb-20">
                            <div className="title">库存计算方式：</div>
                            <div className="form-item-radio dis-flx align-items-center">
                                <Radio value="order" checked={this.state.inventoryCount === 'order' ? true : false} onChange={(e) => this.radioChange(e, 'inventoryCount')} style={{ marginRight: "5px" }} >下单减库存</Radio>
                            </div>
                            <div className="form-item-radio  dis-flx align-items-center ml-5">
                                <Radio value="payMent" checked={this.state.inventoryCount === 'payMent' ? true : false} style={{ marginRight: "5px" }} onChange={(e) => this.radioChange(e, 'inventoryCount')} >付款减库存</Radio>
                            </div>
                        </div>
                        <div className="form-item over-flow">
                            <button type="submit" className="next-step-btn fon-13 pull-right"><i className="iconfont icon-save24 mr-10 fon-12"></i>提交</button>
                            <div className="prev-step-btn mr-20 fon-13 pull-right" onClick={this.prevStepEvent}><i className="iconfont icon-long-arrow-left mr-10 fon-12"></i>上一步</div>
                        </div>
                    </div>
                </form>
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
                                <li className={this.state.tabid === "3" ? `${AddGoodsCssMoudle.tabItem} ${AddGoodsCssMoudle.tabItemActive}` : `${AddGoodsCssMoudle.tabItem}`} data-tabid="3" onClick={this.tabChangeEvent}>厂家设置</li>
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