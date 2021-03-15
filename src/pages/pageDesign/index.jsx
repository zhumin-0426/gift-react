import React from 'react';
// 样式
import styles from '../../css/pageDesign.module.css';
// 图片
import PageDesignLogo from '../../assets/images/pageDesign/logo.png';
import SearchIcon from '../../assets/images/pageDesign/search-icon.png';
import Scan from '../../assets/images/pageDesign/scan.png';
import UserPic from '../../assets/images/pageDesign/user-pic.png';
import Banner from '../../assets/images/pageDesign/banner.png';
import NavIcon from '../../assets/images/pageDesign/nav-item-icon1.png';
import TigIcon from '../../assets/images/pageDesign/tig-icon.png';
import goodsBarItem1 from '../../assets/images/pageDesign/goods-bar-item1.png';
import goodsBarItem2 from '../../assets/images/pageDesign/goods-bar-item2.png';
import goodsBarItem3 from '../../assets/images/pageDesign/goods-bar-item3.png';
import Adversing from '../../assets/images/pageDesign/adversing.png';
import Goods1 from '../../assets/images/pageDesign/goods1.png';
// antd 组件
import { Row, Col, Breadcrumb, Divider, Form, Input, Radio, Slider, Checkbox, Button } from 'antd';
// 拾色器
import InputColor from 'react-input-color';
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}
class PageDesign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabState: 1,
            // 搜索框form数据
            searchTxt: "积分兑换",
            searchStyle: "party",
            seachTxtAlign: "left",
            // 轮播
            bannerPointColor: "#ffffff",
            bannerPointShape: "square",
            bannerTopBottomMargin: "",
            bannerLfteRightMargin: "",
            bannerNodesList: [
                { linkAddress: "https://www.baidu.com" }
            ],
            // 导航
            navOutBgCol: "#ffffff",
            navTopBottomMargin: "",
            navLeftRightMargin: "",
            navInsBgCol: "#ffffff",
            navInsTopMargin: "",
            navInsRightMargin: "",
            navInsBottomMargin: "",
            navInsLeftMargin: "",
            navInsTopRound: "",
            navInsTopRound: "",
            navInsBottomRound: "",
            navLineNum: "3",
            navNodesList: [
                { navTxt: "", navTxtCol: "", linkAddress: "https://www.baidu.com" }
            ],
            // 系统消息
            noticeTopBottomMargin: "",
            noticeLeftRightMargin: "",
            // 推荐
            rcmTopBottomMargin: "",
            rcmLeftRightMargin: "",
            recNodesList: [
                { linkAddress: "" }
            ],
            //广告栏 
            advTopBottomMargin: "",
            advLeftRightMargin: "",
            advNodesList: [{ linkAddress: "https://www.baidu.com" }],
            // 商品分类导航
            goodsTabTopBottomMargin: "",
            goodsTabLeftRightMargin: "",
            goodsTabNodesList: [
                { goodsTabTitle: "", goodsTabScptTxt: "" }
            ]
        }
        this.tabHandle = this.tabHandle.bind(this);
        this.radioHandle = this.radioHandle.bind(this);
        this.sliderChange = this.sliderChange.bind(this);
        this.colorPicker = this.colorPicker.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.addOptionsNodes = this.addOptionsNodes.bind(this);
    }
    // 点击切换
    tabHandle(e) {
        const tabStateVal = Number(e.target.dataset.tabstate);
        this.setState({
            tabState: tabStateVal
        })
    }
    // 单选按钮
    radioHandle(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // 滑动输入条
    sliderChange(name, value) {
        let val = `${value}%`;
        console.log('val', val)
        switch (name) {
            case "bannerTopBottomMargin":
                this.setState({ bannerTopBottomMargin: val });
                break;
            case "bannerLfteRightMargin":
                this.setState({ bannerLfteRightMargin: val });
                break;
            case "bannerLfteRightMargin":
                this.setState({ bannerLfteRightMargin: val });
                break;
            case "navTopBottomMargin":
                this.setState({ navTopBottomMargin: val });
                break;
            case "navLeftRightMargin":
                this.setState({ navLeftRightMargin: val });
                break;
            case "navInsTopMargin":
                this.setState({ navInsTopMargin: val });
                break;
            case "navInsRightMargin":
                this.setState({ navInsRightMargin: val });
                break;
            case "navInsBottomMargin":
                this.setState({ navInsBottomMargin: val });
                break;
            case "navInsLeftMargin":
                this.setState({ navInsLeftMargin: val });
                break;
            case "navInsTopRound":
                this.setState({ navInsTopRound: val });
                break;
            case "navInsBottomRound":
                this.setState({ navInsBottomRound: val });
                break;
            case "noticeTopBottomMargin":
                this.setState({ noticeTopBottomMargin: val });
                break;
            case "noticeLeftRightMargin":
                this.setState({ noticeLeftRightMargin: val });
                break;
            case "rcmTopBottomMargin":
                this.setState({ rcmTopBottomMargin: val });
                break;
            case "rcmLeftRightMargin":
                this.setState({ rcmLeftRightMargin: val });
                break;
            case "advTopBottomMargin":
                this.setState({ advTopBottomMargin: val });
                break;
            case "advLeftRightMargin":
                this.setState({ advLeftRightMargin: val });
                break;
            case "goodsTabTopBottomMargin":
                this.setState({ goodsTabTopBottomMargin: val });
                break;
            case "goodsTabLeftRightMargin":
                this.setState({ goodsTabLeftRightMargin: val });
                break;
            default:
                break;
        }
    }
    sliderTipFormatter(value) {
        return `${value}%`
    }
    // 颜色选择
    colorPicker = (name, value, index) => {
        let color = value.rgba;
        switch (name) {
            case "bannerPointColor":
                this.setState({ bannerPointColor: color });
                break;
            case "navOutBgCol":
                this.setState({ navOutBgCol: color });
                break;
            case "navInsBgCol":
                this.setState({ navInsBgCol: color });
                break;
            case 'navTxtCol':
                let navNodesList = this.state.navNodesList;
                navNodesList[index].navTxtCol = color;
                this.setState(navNodesList);
            default:
                break;
        }
    }
    // 输入框
    inputChange(name, index, e) {
        let val = e.target.value;
        let bannerNodesList = this.state.bannerNodesList;
        let navNodesList = this.state.navNodesList;
        let recNodesList = this.state.recNodesList;
        let advNodesList = this.state.advNodesList;
        let goodsTabNodesList = this.state.goodsTabNodesList;
        switch (name) {
            case 'searchTxt':
                this.setState({ searchTxt: val });
                break;
            case 'bannerLink':
                bannerNodesList[index].linkAddress = val;
                this.setState(bannerNodesList);
                break;
            case 'navTxt':
                navNodesList[index].navTxt = val;
                this.setState(navNodesList);
                break;
            case 'navLinkAddress':
                navNodesList[index].linkAddress = val;
                this.setState(navNodesList);
                break;
            case 'reclinkAddress':
                recNodesList[index].linkAddress = val;
                this.setState(recNodesList);
                break;
            case 'advlinkAddress':
                advNodesList[index].linkAddress = val;
                this.setState(advNodesList);
                break;
            case 'goodsTabTitle':
                goodsTabNodesList[index].goodsTabTitle = val;
                this.setState(goodsTabNodesList);
                break;
            case 'goodsTabScptTxt':
                goodsTabNodesList[index].goodsTabScptTxt = val;
                this.setState(goodsTabNodesList);
                break;
            default:
                break;
        }
    }
    // 添加选项节点
    addOptionsNodes(stateArrName) {
        let newNodesObj
        switch (stateArrName) {
            case 'bannerNodesList':
                newNodesObj = { linkAddress: '' };
                break;
            case 'navNodesList':
                newNodesObj = { navTxt: '', navTxtCol: "", linkAddress: '' };
                break;
            case 'recNodesList':
                newNodesObj = { linkAddress: '' };
                break;
            case 'advNodesList':
                newNodesObj = { linkAddress: '' };
                break;
            case 'goodsTabNodesList':
                newNodesObj = { goodsTabTitle: "", goodsTabScptTxt: "" };
                break;
            default:
                break;
        }
        let newStateArr = this.state[stateArrName];
        newStateArr.push(newNodesObj);
        this.setState(newStateArr);
    }
    // 删除选项节点
    deleteOptionsNodes(index, stateArrName) {
        let newStateArr = this.state[stateArrName];
        if (newStateArr.length === 1) {
            alert('必须有一项')
        } else {
            delete newStateArr[index];
            this.setState(newStateArr);
        }
    }
    render() {
        // 多选
        const options = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
        ];
        const plainOptions = ['Apple', 'Pear', 'Orange'];
        // 搜索框样式单选
        const searchSearchStyleOptions = [
            { label: '方形', value: 'party' },
            { label: '圆形', value: 'round' },
            { label: '圆弧', value: 'arc' },
        ];
        // 搜索框文字单选
        const seachTxtAlignOptions = [
            { label: '居左', value: 'left' },
            { label: '居中', value: 'center' },
            { label: '居右', value: 'right' },
        ]
        const optionsWithDisabled = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange', disabled: false },
        ];
        // 轮播图指示点单选
        const bannerPointShapeOptions = [
            { label: '正方形', value: 'square' },
            { label: '圆形', value: 'round' },
            { label: '长方形', value: 'rectangle' },
        ]
        // 导航数量
        const navLineNumOptions = [
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
        ]
        // 表单提交成功
        const onFinish = (values: any) => {
            console.log('Success:', values);
        };
        // 表单提交失败
        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
        // 轮播节点列表
        let bannerNodesList = this.state.bannerNodesList;
        let bannerNodesItems = bannerNodesList.map((item, index) => {
            return <div className="nodes-box pd-17 bg-f7f bor-rds-3 mb-20" key={index}>
                <Form.Item label={item.picTitle} name="bannerPic">
                    <div className="ipt-file-cover-element pos-r">
                        <Input className="pos-a opacity-0 w100 h100" type='file' />
                    </div>
                </Form.Item>
                <Form.Item label="链接地址" name={['bannerNodesList', index, 'linkAddress']}>
                    <Input defaultValue={item.linkAddress} className="ant-input-bottom-line" onChange={(e) => this.inputChange('bannerLink', index, e)} />
                </Form.Item>
                <div className="delete" onClick={() => this.deleteOptionsNodes(index, 'bannerNodesList')}></div>
            </div>
        })
        // 导航节点列表
        let navNodesList = this.state.navNodesList;
        let bannerNodesItem = navNodesList.map((item, index) => {
            return <div className="nodes-box from-item pd-17 bg-f7f bor-rds-3 mb-20">
                <Form.Item label="图片" name="navPic">
                    <div className="ipt-file-cover-element pos-r">
                        <Input className="pos-a opacity-0 w100 h100" type='file' />
                    </div>
                </Form.Item>
                <Form.Item label="文字内容" name={['navNodesList', index, 'navTxt']}>
                    <Input defaultValue={item.navTxt} className="ant-input-bottom-line" onChange={(e) => this.inputChange('navTxt', index, e)} />
                </Form.Item>
                <Form.Item label="文字颜色" name={['navNodesList', index, 'navTxtCol']}>
                    <InputColor
                        initialValue="#ffffff"
                        onChange={(value) => this.colorPicker('navTxtCol', value, index)}
                        placement="right"
                    ></InputColor>
                </Form.Item>
                <Form.Item label="H5链接" name={['navNodesList', index, 'linkAddress']}>
                    <Input defaultValue={item.linkAddress} className="ant-input-bottom-line" onChange={(e) => this.inputChange('navLinkAddress', index, e)} />
                </Form.Item>
                <div className="delete" onClick={() => this.deleteOptionsNodes(index, 'navNodesList')}></div>
            </div>
        })
        // 推荐节点列表
        let recNodesList = this.state.recNodesList;
        let recNodesItem = recNodesList.map((item, index) => {
            return (
                <div className="nodes-box from-item pd-17 bg-f7f bor-rds-3 mb-20">
                    <Form.Item label="图片" name="rcmPic">
                        <div className="ipt-file-cover-element pos-r">
                            <Input className="pos-a opacity-0 w100 h100" type='file' />
                        </div>
                    </Form.Item>
                    <Form.Item label="H5链接" name={['recNodesList', index, 'linkAddress']}>
                        <Input defaultValue={item.linkAddress} className="ant-input-bottom-line" onChange={(e) => this.inputChange('reclinkAddress', index, e)} />
                    </Form.Item>
                    <div className="delete" onClick={() => this.deleteOptionsNodes(index, 'recNodesList')}></div>
                </div>
            )
        })
        // 广告节点列表
        let advNodesList = this.state.advNodesList;
        let advNodesItem = advNodesList.map((item, index) => {
            return (
                <div className="nodes-box from-item pd-17 bg-f7f bor-rds-3 mb-20">
                    <Form.Item label="图片" name="advPic">
                        <div className="ipt-file-cover-element pos-r">
                            <Input className="pos-a opacity-0 w100 h100" type='file' />
                        </div>
                    </Form.Item>
                    <Form.Item label="H5链接" name={['advNodesList', index, 'linkAddress']}>
                        <Input defaultValue={item.linkAddress} className="ant-input-bottom-line" onChange={(e) => this.inputChange('advlinkAddress', index, e)} />
                    </Form.Item>
                    <div className="delete" onClick={() => this.deleteOptionsNodes(index, 'advNodesList')}></div>
                </div>
            )
        })
        // 商品分类导航
        let goodsTabNodesList = this.state.goodsTabNodesList;
        let goodsTabNodesItem = goodsTabNodesList.map((item, index) => {
            return (
                <div className="nodes-box from-item pd-17 bg-f7f bor-rds-3 mb-20">
                    <Form.Item label="标题" name={['goodsTabNodesList', index, 'goodsTabTitle']}>
                        <Input defaultValue={item.linkAddress} className="ant-input-bottom-line" onChange={(e) => this.inputChange('goodsTabTitle', index, e)} />
                    </Form.Item>
                    <Form.Item label="描述文字" name={['goodsTabNodesList', index, 'goodsTabScptTxt']}>
                        <Input defaultValue={item.linkAddress} className="ant-input-bottom-line" onChange={(e) => this.inputChange('goodsTabScptTxt', index, e)} />
                    </Form.Item>
                    <div className="delete" onClick={() => this.deleteOptionsNodes(index, 'goodsTabNodesList')}></div>
                </div>
            )
        })
        return (
            <div className="main">
                <Row className="content-title mb-10">
                    <Col span={12}>
                        <h3><strong>页面设计</strong></h3>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>系统</Breadcrumb.Item>
                            <Breadcrumb.Item>页面设计</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row gutter={30}>
                    <Col span={6}>
                        <div className={styles.pageDesignCard}>
                            <div className={styles.phoneTop}>
                                <h4>礼品汇</h4>
                            </div>
                            <header>
                                {/* 搜索 */}
                                <div className={styles.top + ' pd-11 tab'}>
                                    <div className="tab-z" data-tabstate="1" onClick={this.tabHandle}></div>
                                    <div className="pageDesignLogo">
                                        <img className="w100" src={PageDesignLogo} alt="" />
                                    </div>
                                    <div className={styles.search}>
                                        <div className="search-icon">
                                            <img className="w100 dis-block" src={SearchIcon} alt="" />
                                        </div>
                                        <div>{this.state.searchTxt}</div>
                                        <div className="scan">
                                            <img className="w100 dis-block" src={Scan} alt="" />
                                        </div>
                                    </div>
                                    <div className="user-pic">
                                        <img src={UserPic} alt="" />
                                    </div>
                                </div>
                                {/* 轮播 */}
                                <div className=" banner tab">
                                    <div className="tab-z" data-tabstate="2" onClick={this.tabHandle}></div>
                                    <img src={Banner} alt="" />
                                </div>
                            </header>
                            <section>
                                {/* 导航 */}
                                <ul className="nav tab">
                                    <div className="tab-z" data-tabstate="3" onClick={this.tabHandle}></div>
                                    <li>
                                        <img src={NavIcon} alt="" />
                                        <span>家居家纺</span>
                                    </li>
                                    <li>
                                        <img src={NavIcon} alt="" />
                                        <span>家居家纺</span>
                                    </li>
                                    <li>
                                        <img src={NavIcon} alt="" />
                                        <span>家居家纺</span>
                                    </li>
                                    <li>
                                        <img src={NavIcon} alt="" />
                                        <span>家居家纺</span>
                                    </li>
                                    <li>
                                        <img src={NavIcon} alt="" />
                                        <span>家居家纺</span>
                                    </li>
                                </ul>
                                {/* 提示 */}
                                <div className="notice-wrapper tab">
                                    <div className="tab-z" data-tabstate="4" onClick={this.tabHandle}></div>
                                    <div className="notice">
                                        <div className="title">
                                            <img className="title-icon" src={TigIcon} alt="" />
                                            <span>最新通知</span>
                                        </div>
                                        <div className="main">
                                            NIKE ADIDAS 进驻顺的积分...
                                            </div>
                                        <div className="more">更多</div>
                                    </div>
                                </div>
                                {/* 推荐 */}
                                <ul className=" rcm-goods tab">
                                    <div className="tab-z" data-tabstate="5" onClick={this.tabHandle}></div>
                                    <li>
                                        <img src={goodsBarItem1} alt="" />
                                    </li>
                                    <li>
                                        <img src={goodsBarItem2} alt="" />
                                    </li>
                                    <li>
                                        <img src={goodsBarItem3} alt="" />
                                    </li>
                                </ul>
                                {/* 广告 */}
                                <div className=" adv tab">
                                    <div className="tab-z" data-tabstate="6" onClick={this.tabHandle}></div>
                                    <img className="w100 dis-block" src={Adversing} alt="" />
                                </div>
                                {/* 商品 */}
                                <div className=" tab-classify tab">
                                    <div className="tab-z" data-tabstate="7" onClick={this.tabHandle}></div>
                                    <div className="tab-item tab-item-active">
                                        <div className="txt">全部</div>
                                        <div className="prompt">为您推荐</div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="tab-item">
                                        <div className="txt">精选</div>
                                        <div className="prompt">海量正品</div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="tab-item">
                                        <div className="txt">热门</div>
                                        <div className="prompt">好物疯抢</div>
                                        <div className="line"></div>
                                    </div>
                                    <div className="tab-item">
                                        <div className="txt">特惠</div>
                                        <div className="prompt">超值好货</div>
                                        <div className="line"></div>
                                    </div>
                                </div>
                                <div className="tab-obj-classify tab">
                                    <div className="tab-z" data-tabstate="8" onClick={this.tabHandle}></div>
                                    <div className="classify-obj-item">
                                        <img src={Goods1} alt="" />
                                        <div className="goods-name line-clamp2">多用途舒适枕芯 3D螺旋卷曲
    立体纤维 有效缓解睡眠难题</div>
                                        <div className="describe line-clamp1">美观且大方，不容错过</div>
                                        <div className="price-wrapper">
                                            <div className="price">999</div>
                                            <div className="line-price">1999</div>
                                        </div>
                                    </div>
                                    <div className="classify-obj-item">
                                        <img src={Goods1} alt="" />
                                        <div className="goods-name line-clamp2">多用途舒适枕芯 3D螺旋卷曲
    立体纤维 有效缓解睡眠难题</div>
                                        <div className="describe line-clamp1">美观且大方，不容错过</div>
                                        <div className="price-wrapper">
                                            <div className="price">999</div>
                                            <div className="line-price">1999</div>
                                        </div>
                                    </div>
                                    <div className="classify-obj-item">
                                        <img src={Goods1} alt="" />
                                        <div className="goods-name line-clamp2">多用途舒适枕芯 3D螺旋卷曲
    立体纤维 有效缓解睡眠难题</div>
                                        <div className="describe line-clamp1">美观且大方，不容错过</div>
                                        <div className="price-wrapper">
                                            <div className="price">999</div>
                                            <div className="line-price">1999</div>
                                        </div>
                                    </div>
                                    <div className="classify-obj-item">
                                        <img src={Goods1} alt="" />
                                        <div className="goods-name line-clamp2">多用途舒适枕芯 3D螺旋卷曲
    立体纤维 有效缓解睡眠难题</div>
                                        <div className="describe line-clamp1">美观且大方，不容错过</div>
                                        <div className="price-wrapper">
                                            <div className="price">999</div>
                                            <div className="line-price">1999</div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div className={styles.pageSetWrapper}>
                            <Form
                                name="page_set_form"
                                initialValues={{ bannerNodesList: bannerNodesList, navNodesList: navNodesList, recNodesList: recNodesList, advNodesList: advNodesList, goodsTabNodesList: goodsTabNodesList }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}>
                                {/* 搜索设置 */}
                                <div className={this.state.tabState === 1 ? 'search-set active' : 'search-set tab-obj-item'}>
                                    <h3 className="page-set-title">搜索框</h3>
                                    <Divider />
                                    <Form.Item label="搜索文字" name="searchTxt">
                                        <Input defaultValue="积分兑换" onChange={(e) => this.inputChange('searchTxt', '', e)} />
                                    </Form.Item>
                                    <Form.Item label="搜索框样式" name="searchStyle">
                                        <Radio.Group name="searchStyle" options={searchSearchStyleOptions} onChange={(e) => this.radioHandle(e)} defaultValue={this.state.searchStyle} />
                                    </Form.Item>
                                    <Form.Item label="文字对齐方式" name="seachTxtAlign">
                                        <Radio.Group name="seachTxtAlign" options={seachTxtAlignOptions} onChange={(e) => this.radioHandle(e)} defaultValue={this.state.seachTxtAlign} />
                                    </Form.Item>
                                </div>
                                {/* 轮播设置 */}
                                <div className={this.state.tabState === 2 ? 'banner-set active' : 'banner-set tab-obj-item'}>
                                    <h3 className="page-set-title">轮播</h3>
                                    <Divider />
                                    <Form.Item label="指示点颜色" name="bannerPointColor">
                                        <InputColor
                                            initialValue="#ffffff"
                                            onChange={(value) => this.colorPicker('bannerPointColor', value)}
                                            placement="right"
                                        ></InputColor>
                                    </Form.Item>
                                    <Form.Item label="指示点形状" name="bannerPointShape">
                                        <Radio.Group name="bannerPointShape" options={bannerPointShapeOptions} onChange={(e) => this.radioHandle(e)} defaultValue={this.state.bannerPointShape} />
                                    </Form.Item>
                                    <Form.Item label="上下边距" name="bannerTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('bannerTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="bannerLfteRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('bannerLfteRightMargin', value)} />
                                    </Form.Item>
                                    {bannerNodesItems}
                                    <Form.Item>
                                        <Button className="pull-right" type="default" onClick={() => this.addOptionsNodes('bannerNodesList')}>添加一个</Button>
                                    </Form.Item>
                                </div>
                                {/* 导航设置 */}
                                <div className={this.state.tabState === 3 ? 'nav-set active' : 'nav-set tab-obj-item'}>
                                    <h3 className="page-set-title">导航</h3>
                                    <Divider />
                                    <Form.Item label="外框背景颜色" name="navOutBgCol">
                                        <InputColor
                                            initialValue="#ffffff"
                                            onChange={(value) => this.colorPicker('navOutBgCol', value)}
                                            placement="right"
                                        ></InputColor>
                                    </Form.Item>
                                    <Form.Item label="上下边距" name="navTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('navTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="navLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('navLeftRightMargin', value)} />
                                    </Form.Item>
                                    <Divider dashed />
                                    <Form.Item label="内框背景颜色" name="navInsBgCol">
                                        <InputColor
                                            initialValue="#ffffff"
                                            onChange={(value) => this.colorPicker('navInsBgCol', value)}
                                            placement="right"
                                        ></InputColor>
                                    </Form.Item>
                                    <Form.Item label="上边距" name="navInsTopMargin">
                                        <Slider onChange={(value) => this.sliderChange('navInsTopMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="右边距" name="navInsRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('navInsRightMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="下边距" name="navInsBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('navInsBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左边距" name="navInsLeftMargin">
                                        <Slider onChange={(value) => this.sliderChange('navInsLeftMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="上圆角" name="navInsTopRound">
                                        <Slider onChange={(value) => this.sliderChange('navInsTopRound', value)} />
                                    </Form.Item>
                                    <Form.Item label="下圆角" name="navInsBottomRound">
                                        <Slider onChange={(value) => this.sliderChange('navInsBottomRound', value)} />
                                    </Form.Item>
                                    <Form.Item label="每行数量" name="navLineNum">
                                        <Radio.Group name="navLineNum" options={navLineNumOptions} onChange={(e) => this.radioHandle(e)} defaultValue={this.state.navLineNum} />
                                    </Form.Item>
                                    {bannerNodesItem}
                                    <Form.Item>
                                        <Button className="pull-right" type="default" onClick={() => this.addOptionsNodes('navNodesList')}>添加一个</Button>
                                    </Form.Item>
                                </div>
                                {/* 系统消息 */}
                                <div className={this.state.tabState === 4 ? 'notice-set active' : 'notice-set tab-obj-item'}>
                                    <h3 className="page-set-title">系统消息</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="noticeTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('noticeTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="noticeLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('noticeLeftRightMargin', value)} />
                                    </Form.Item>
                                </div>
                                {/* 热门推荐 */}
                                <div className={this.state.tabState === 5 ? 'rcm-goods-set active' : 'rcm-goods-set tab-obj-item'}>
                                    <h3 className="page-set-title">推荐</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="rcmTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('rcmTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="rcmLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('rcmLeftRightMargin', value)} />
                                    </Form.Item>
                                    {recNodesItem}
                                    <Form.Item>
                                        <Button className="pull-right" type="default" onClick={() => this.addOptionsNodes('recNodesList')}>添加一个</Button>
                                    </Form.Item>
                                </div>
                                {/* 广告 */}
                                <div className={this.state.tabState === 6 ? 'adv-set active' : 'adv-set tab-obj-item'}>
                                    <h3 className="page-set-title">广告栏</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="advTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('advTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="advLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('advLeftRightMargin', value)} />
                                    </Form.Item>
                                    {advNodesItem}
                                    <Form.Item>
                                        <Button className="pull-right" type="default" onClick={() => this.addOptionsNodes('advNodesList')}>添加一个</Button>
                                    </Form.Item>
                                </div>
                                {/* 商品分类导航设置 */}
                                <div className={this.state.tabState === 7 ? 'goods-tab-set active' : 'goods-tab-set tab-obj-item'}>
                                    <h3 className="page-set-title">商品分类导航</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="goodsTabTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsTabTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="goodsTabLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsTabLeftRightMargin', value)} />
                                    </Form.Item>
                                    {goodsTabNodesItem}
                                    <Form.Item>
                                        <Button className="pull-right" type="default" onClick={() => this.addOptionsNodes('goodsTabNodesList')}>添加一个</Button>
                                    </Form.Item>
                                </div>
                                {/* 商品设置 */}
                                <div className={this.state.tabState === 8 ? 'goods-set active' : 'goods-set tab-obj-item'}>
                                    <h3 className="page-set-title">商品</h3>
                                    <Divider />
                                    <Form.Item label="商品分类" name="goodsClassify">
                                        <select className="ant-select w100" name="" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </Form.Item>
                                    <Form.Item label="商品排序" name="goodsSort">
                                        {/* <Radio.Group onChange={onChange} value={value}>
                                            <Radio value={1}>综合</Radio>
                                            <Radio value={2}>销量</Radio>
                                            <Radio value={3}>价格</Radio>
                                        </Radio.Group> */}
                                    </Form.Item>
                                    <Form.Item label="显示内容" name="goodsTxt">
                                        <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
                                        <br />
                                        <br />
                                        <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
                                        <br />
                                        <br />
                                        <Checkbox.Group
                                            options={optionsWithDisabled}
                                            disabled
                                            defaultValue={['Apple']}
                                            onChange={onChange}
                                        />
                                    </Form.Item>
                                </div>
                                <Form.Item>
                                    <Button className="pull-right" type="primary" htmlType="submit">保存页面</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default PageDesign;