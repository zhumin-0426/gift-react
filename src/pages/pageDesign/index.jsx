import React from 'react';
import axios from '../../common/js/axios';
// 样式
import pageDesignStyles from '../../css/pageDesign.module.css';
// 图片
import PageDesignLogo from '../../assets/images/pageDesign/logo.png';
import SearchIcon from '../../assets/images/pageDesign/search-icon.png';
// import Scan from '../../assets/images/pageDesign/scan.png';
import UserPic from '../../assets/images/pageDesign/user-pic.png';
import Banner from '../../assets/images/pageDesign/banner.png';
import NavIcon from '../../assets/images/pageDesign/nav-item-icon1.png';
import TigIcon from '../../assets/images/pageDesign/tig-icon.png';
import goodsBarItem1 from '../../assets/images/pageDesign/goods-bar-item1.png';
import goodsBarItem2 from '../../assets/images/pageDesign/goods-bar-item2.png';
import goodsBarItem3 from '../../assets/images/pageDesign/goods-bar-item3.png';
import Adversing from '../../assets/images/pageDesign/adversing.png';
import Goods1 from '../../assets/images/pageDesign/goods1.png';
import picDefUrl from '../../assets/images/img-upload-bag.png';
// antd 组件
import { Row, Col, Breadcrumb, Divider, Form, Input, Radio, Slider, Checkbox, Button } from 'antd';
// 图片库组件
import PicLibrary from '../../components/picLibrary';
// 拾色器
import InputColor from 'react-input-color';
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
            bannerPointColor: "#ff0000",
            bannerPointShape: "square",
            // bannerTopBottomMargin: "",
            // bannerLfteRightMargin: "",
            bannerNodesList: [
                { linkAddress: "https://www.baidu.com", picUrl: "", picDefUrl: "" }
            ],
            // 导航
            // navOutBgCol: "#ffffff",
            // navTopBottomMargin: "",
            // navLeftRightMargin: "",
            // navInsBgCol: "#ffffff",
            // navInsTopMargin: "",
            // navInsRightMargin: "",
            // navInsBottomMargin: "",
            // navInsLeftMargin: "",
            // navInsTopRound: "",
            // navInsTopRound: "",
            // navInsBottomRound: "",
            // navLineNum: "3",
            navNodesList: [
                { navTxt: "家居家纺", navTxtCol: "#000000", linkAddress: "https://www.baidu.com", picUrl: "" }
            ],
            // 系统消息
            noticeTopBottomMargin: "0%",
            // noticeLeftRightMargin: "",
            // 推荐
            rcmTopBottomMargin: "0%",
            // rcmLeftRightMargin: "",
            recNodesList: [
                { linkAddress: "http://www.baidu.com", picUrl: "" }
            ],
            //广告栏 
            advTopBottomMargin: "0%",
            // advLeftRightMargin: "",
            advNodesList: [{ linkAddress: "https://www.baidu.com", picUrl: "" }],
            // 商品分类导航
            goodsTabTopBottomMargin: "0%",
            // goodsTabLeftRightMargin: "",
            goodsTabNodesList: [
                { goodsTabTitle: "全部", goodsTabScptTxt: "为您推荐" }
            ],
            // 商品
            goodsSort: "comprehensive",
            goodsPlayMain: ['goodsName'],
            // goodsTopBottomMargin: "",
            // goodsLfteRightMargin: "",
            // goodsPicRound: "",
            // goodsInsTopBottomMargin: "",
            // goodsInsLfteRightMargin: "",
            // goodsOutTopBottomMargin: "",
            // goodsOutLfteRightMargin: "",
            // 图片库
            picLibraryStatus: false,
            storeIndex: 0,
            colName: ""
        }
        this.tabHandle = this.tabHandle.bind(this);
        this.radioHandle = this.radioHandle.bind(this);
        this.checkBoxChange = this.checkBoxChange.bind(this);
        this.sliderChange = this.sliderChange.bind(this);
        this.colorPicker = this.colorPicker.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.addOptionsNodes = this.addOptionsNodes.bind(this);
        this.picLibraryBackData = this.picLibraryBackData.bind(this);
        this.picLibraryStatusChange = this.picLibraryStatusChange.bind(this);
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
    // 多选按钮
    checkBoxChange(name, e) {
        let val = e.target["data-val"];
        let checked = e.target.checked;
        switch (name) {
            case 'goodsPlayMain':
                let goodsPlayMain = this.state.goodsPlayMain;
                if (checked) {
                    if (!goodsPlayMain.includes(val)) {
                        goodsPlayMain.push(val);
                    }
                } else {
                    goodsPlayMain.splice(goodsPlayMain.indexOf(val), 1)
                }
                this.setState(goodsPlayMain);
                break;
            default:
                break;
        }
    }
    // 滑动输入条
    sliderChange(name, value) {
        let val = `${value}%`;
        console.log('val', val)
        switch (name) {
            // case "bannerTopBottomMargin":
            //     this.setState({ bannerTopBottomMargin: val });
            //     break;
            // case "bannerLfteRightMargin":
            //     this.setState({ bannerLfteRightMargin: val });
            //     break;
            // case "bannerLfteRightMargin":
            //     this.setState({ bannerLfteRightMargin: val });
            //     break;
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
            // case "noticeLeftRightMargin":
            //     this.setState({ noticeLeftRightMargin: val });
            //     break;
            case "rcmTopBottomMargin":
                this.setState({ rcmTopBottomMargin: val });
                break;
            // case "rcmLeftRightMargin":
            //     this.setState({ rcmLeftRightMargin: val });
            //     break;
            case "advTopBottomMargin":
                this.setState({ advTopBottomMargin: val });
                break;
            // case "advLeftRightMargin":
            //     this.setState({ advLeftRightMargin: val });
            //     break;
            case "goodsTabTopBottomMargin":
                this.setState({ goodsTabTopBottomMargin: val });
                break;
            // case "goodsTabLeftRightMargin":
            //     this.setState({ goodsTabLeftRightMargin: val });
            //     break;
            // case "goodsTopBottomMargin":
            //     this.setState({ goodsTopBottomMargin: val });
            //     break;
            // case "goodsLfteRightMargin":
            //     this.setState({ goodsLfteRightMargin: val });
            //     break;
            // case "goodsPicRound":
            //     this.setState({ goodsPicRound: val });
            //     break;
            // case "goodsInsTopBottomMargin":
            //     this.setState({ goodsInsTopBottomMargin: val });
            //     break;
            // case "goodsInsLfteRightMargin":
            //     this.setState({ goodsInsLfteRightMargin: val });
            //     break;
            // case "goodsOutTopBottomMargin":
            //     this.setState({ goodsOutTopBottomMargin: val });
            //     break;
            // case "goodsOutLfteRightMargin":
            //     this.setState({ goodsOutLfteRightMargin: val });
            //     break;
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
            default:
                let navNodesList = this.state.navNodesList;
                navNodesList[index].navTxtCol = color;
                this.setState(navNodesList);
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
                newNodesObj = { linkAddress: '', picUrl: "" };
                break;
            case 'navNodesList':
                newNodesObj = { navTxt: '', navTxtCol: "", linkAddress: '', picUrl: "" };
                break;
            case 'recNodesList':
                newNodesObj = { linkAddress: '', picUrl: '' };
                break;
            case 'advNodesList':
                newNodesObj = { linkAddress: '', picUrl: "" };
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
    // 图片库=>数据返回
    picLibraryBackData(data, picCollection) {
        console.log('picCollection',picCollection)
        let colName = this.state.colName;
        let storeIndex = this.state.storeIndex;
        let arr = []
        switch (colName) {
            case 'bannerNodesList':
                arr = this.state.bannerNodesList;
                picCollection.length > 0 ? arr[storeIndex].picUrl = picCollection[0] : arr[storeIndex].picUrl = '';
                break;
            case 'navNodesList':
                arr = this.state.navNodesList;
                picCollection.length > 0 ? arr[storeIndex].picUrl = picCollection[0] : arr[storeIndex].picUrl = '';
                break;
            case 'recNodesList':
                arr = this.state.recNodesList;
                picCollection.length > 0 ? arr[storeIndex].picUrl = picCollection[0] : arr[storeIndex].picUrl = '';
                break;
            default:
                arr = this.state.advNodesList;
                picCollection.length > 0 ? arr[storeIndex].picUrl = picCollection[0] : arr[storeIndex].picUrl = '';
                break;
        }
        console.log('arr',arr)
        this.setState({
            picLibraryStatus: !data,
            colName: arr
        })
        console.log(this.state.bannerNodesList)
        console.log("picCollection", picCollection)
    }
    picLibraryStatusChange(index, colName) {
        this.setState({
            picLibraryStatus: true,
            storeIndex: index,
            colName: colName
        });
    }
    render() {
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
        // 轮播图指示点单选
        const bannerPointShapeOptions = [
            { label: '正方形', value: 'square' },
            { label: '圆形', value: 'round' },
            { label: '长方形', value: 'rectangle' },
        ]
        // 导航数量
        // const navLineNumOptions = [
        //     { label: '3', value: '3' },
        //     { label: '4', value: '4' },
        //     { label: '5', value: '5' },
        // ]
        // 商品排序
        const goodsSortOptions = [
            { label: '综合', value: 'comprehensive' },
            { label: '销量', value: 'sales' },
            { label: '价格', value: 'price' },
        ]
        // 轮播节点列表
        let bannerNodesList = this.state.bannerNodesList;
        let bannerNodesItems = bannerNodesList.map((item, index) => {
            return <div className="nodes-box pd-17 bg-f7f bor-rds-3 mb-20" key={index}>
                <Form.Item label="图片" name="bannerPic">
                    <div className="ipt-file-cover-element pos-r" onClick={() => this.picLibraryStatusChange(index, 'bannerNodesList')}>
                        {item.picUrl !== '' ? <img style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} src={item.picUrl} alt="" /> : <img style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} src={picDefUrl} alt="" />}
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
                    <div className="ipt-file-cover-element pos-r" onClick={() => this.picLibraryStatusChange(index, 'navNodesList')}>
                        {item.picUrl !== '' ? <img style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} src={item.picUrl} alt="" /> : <img style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} src={picDefUrl} alt="" />}
                    </div>
                </Form.Item>
                <Form.Item label="文字内容" name={['navNodesList', index, 'navTxt']}>
                    <Input defaultValue={item.navTxt} className="ant-input-bottom-line" onChange={(e) => this.inputChange('navTxt', index, e)} />
                </Form.Item>
                <Form.Item label="文字颜色" name={['navNodesList', index, 'navTxtCol']}>
                    <InputColor
                        initialValue={item.navTxtCol}
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
                        <div className="ipt-file-cover-element pos-r" onClick={() => this.picLibraryStatusChange(index, 'recNodesList')}>
                            {item.picUrl !== '' ? <img style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} src={item.picUrl} alt="" /> : <img style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} src={picDefUrl} alt="" />}
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
                        <div className="ipt-file-cover-element pos-r" onClick={() => this.picLibraryStatusChange(index, 'advNodesList')}>
                            {item.picUrl !== '' ? <img style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} src={item.picUrl} alt="" /> : <img style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} src={picDefUrl} alt="" />}
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
        // 商品
        let goodsPlayMain = this.state.goodsPlayMain;
        /*
            动态样式
            根据表单数据进行变化
        */
        //搜索框样式    
        const searchStyles = {
            searchStyle: () => {
                switch (this.state.searchStyle) {
                    case 'party':
                        return "0"
                    case 'arc':
                        return "4px"
                    default:
                        return "30px"
                }
            },
            seachTxtAlign: () => {
                switch (this.state.seachTxtAlign) {
                    case 'left':
                        return "flex-start"
                    case 'center':
                        return "center"
                    default:
                        return "flex-end"
                }
            }
        }
        // 轮播样式
        const bannerStyles = {
            bannerPointColor: () => {
                return this.state.bannerPointColor;
            },
            bannerPointShape: () => {
                switch (this.state.bannerPointShape) {
                    case 'square':
                        return ["40px", "8px", "8px", "0", "5px", "-20px"]
                    case 'round':
                        return ["40px", "8px", "8px", "50%", "5px", "-20px"]
                    default:
                        return ["78px", "26px", "2px", "0", "0", "-39px"]
                }
            }
        }
        // 系统消息
        const noticeStyles = {
            noticeTopBottomMargin: () => {
                return this.state.noticeTopBottomMargin
            }
        }
        // 热门推荐
        const recStyles = {
            rcmTopBottomMargin: () => {
                return this.state.rcmTopBottomMargin
            }
        }
        // 广告栏
        const advStyles = {
            advTopBottomMargin: () => {
                return this.state.advTopBottomMargin
            }
        }
        // 商品tab
        const goodsTabStyles = {
            goodsTabTopBottomMargin: () => {
                return this.state.goodsTabTopBottomMargin
            }
        }
        // 表单提交成功
        const onFinish = (data) => {
            console.log('Success:', data);
            let params = {
                data: data
            }
            axios.postAxios('/pageDesign/storePageSet', params).then(res => {
                console.log('res', res)
            })
        };
        // 表单提交失败
        const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
        };
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
                        <div className={pageDesignStyles.pageDesignCard}>
                            <div className="phoneTop">
                                <h4>礼品汇</h4>
                            </div>
                            <header>
                                {/* 搜索 */}
                                <div className='top pd-11 tab'>
                                    <div className={this.state.tabState === 1 ? 'tab-z tab-z-active' : 'tab-z'} data-tabstate="1" onClick={this.tabHandle}></div>
                                    <div className="pageDesignLogo">
                                        <img className="w100" src={PageDesignLogo} alt="" />
                                    </div>
                                    <div className={pageDesignStyles.search} style={{ borderRadius: searchStyles.searchStyle(), justifyContent: searchStyles.seachTxtAlign() }}>
                                        <div className="search-icon">
                                            <img className="w100 dis-block" src={SearchIcon} alt="" />
                                        </div>
                                        <div className="search-txt">{this.state.searchTxt}</div>
                                        {/* <div className="scan">
                                            <img className="w100 dis-block" src={Scan} alt="" />
                                        </div> */}
                                    </div>
                                    <div className="user-pic">
                                        <img src={UserPic} alt="" />
                                    </div>
                                </div>
                                {/* 轮播 */}
                                <div className="banner tab">
                                    <div className={this.state.tabState === 2 ? 'tab-z tab-z-active' : 'tab-z'} data-tabstate="2" onClick={this.tabHandle}></div>
                                    <ul className="point-box" style={{ width: bannerStyles.bannerPointShape()[0], marginLeft: bannerStyles.bannerPointShape()[5] }}>
                                        <li className="point-box-item" style={{ width: bannerStyles.bannerPointShape()[1], height: bannerStyles.bannerPointShape()[2], borderRadius: bannerStyles.bannerPointShape()[3] }}></li>
                                        <li className="point-box-item" style={{ backgroundColor: bannerStyles.bannerPointColor(), width: bannerStyles.bannerPointShape()[1], height: bannerStyles.bannerPointShape()[2], borderRadius: bannerStyles.bannerPointShape()[3], marginLeft: bannerStyles.bannerPointShape()[4], marginRight: bannerStyles.bannerPointShape()[4] }}></li>
                                        <li className="point-box-item" style={{ width: bannerStyles.bannerPointShape()[1], height: bannerStyles.bannerPointShape()[2], borderRadius: bannerStyles.bannerPointShape()[3] }}></li>
                                    </ul>
                                    <img src={Banner} alt="" />
                                </div>
                            </header>
                            <section>
                                {/* 导航 */}
                                <ul className="nav tab">
                                    <div className={this.state.tabState === 3 ? 'tab-z tab-z-active' : 'tab-z'} data-tabstate="3" onClick={this.tabHandle}></div>
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
                                    <div className={this.state.tabState === 4 ? 'tab-z tab-z-active' : 'tab-z'} data-tabstate="4" onClick={this.tabHandle}></div>
                                    <div className="notice" style={{ margin: noticeStyles.noticeTopBottomMargin() + '0' }}>
                                        <div className="title">
                                            <img className="title-icon" src={TigIcon} alt="" />
                                            <span>最新通知</span>
                                        </div>
                                        <div className="main">
                                            系统消息
                                        </div>
                                        <div className="more">更多</div>
                                    </div>
                                </div>
                                {/* 推荐 */}
                                <ul className=" rcm-goods tab" style={{ margin: recStyles.rcmTopBottomMargin() + '0' }}>
                                    <div className={this.state.tabState === 5 ? 'tab-z tab-z-active' : 'tab-z'} data-tabstate="5" onClick={this.tabHandle}></div>
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
                                <div className=" adv tab" style={{ margin: advStyles.advTopBottomMargin + '0' }}>
                                    <div className={this.state.tabState === 6 ? 'tab-z tab-z-active' : 'tab-z'} data-tabstate="6" onClick={this.tabHandle}></div>
                                    <img className="w100 dis-block" src={Adversing} alt="" />
                                </div>
                                {/* 商品tab */}
                                <div className=" tab-classify tab" style={{ margin: goodsTabStyles.goodsTabTopBottomMargin() + '0' }}>
                                    <div className={this.state.tabState === 7 ? 'tab-z tab-z-active' : 'tab-z'} data-tabstate="7" onClick={this.tabHandle}></div>
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
                                {/* 商品tabObj */}
                                <div className="tab-obj-classify tab">
                                    <div className={this.state.tabState === 8 ? 'tab-z tab-z-active' : 'tab-z'} data-tabstate="8" onClick={this.tabHandle}></div>
                                    <div className="classify-obj-item">
                                        <img src={Goods1} alt="" />
                                        <div className="goods-name line-clamp2">{goodsPlayMain.includes('goodsName') ? '商品名称' : ''}</div>
                                        <div className="describe line-clamp1">{goodsPlayMain.includes('goodsScr') ? '商品描述' : ''}</div>
                                        <div className="price-wrapper">
                                            <div className="price">{goodsPlayMain.includes('goodsPrice') ? '价格' : ''}</div>
                                            <div className="line-price">{goodsPlayMain.includes('goodsLinePrice') ? '划线价格' : ''}</div>
                                        </div>
                                        <div className="sales">{goodsPlayMain.includes('goodsSales') ? '销量' : ''}</div>
                                    </div>
                                    <div className="classify-obj-item">
                                        <img src={Goods1} alt="" />
                                        <div className="goods-name line-clamp2">{goodsPlayMain.includes('goodsName') ? '商品名称' : ''}</div>
                                        <div className="describe line-clamp1">{goodsPlayMain.includes('goodsScr') ? '商品描述' : ''}</div>
                                        <div className="price-wrapper">
                                            <div className="price">{goodsPlayMain.includes('goodsPrice') ? '价格' : ''}</div>
                                            <div className="line-price">{goodsPlayMain.includes('goodsLinePrice') ? '划线价格' : ''}</div>
                                        </div>
                                        <div className="sales">{goodsPlayMain.includes('goodsSales') ? '销量' : ''}</div>
                                    </div>
                                    <div className="classify-obj-item">
                                        <img src={Goods1} alt="" />
                                        <div className="goods-name line-clamp2">{goodsPlayMain.includes('goodsName') ? '商品名称' : ''}</div>
                                        <div className="describe line-clamp1">{goodsPlayMain.includes('goodsScr') ? '商品描述' : ''}</div>
                                        <div className="price-wrapper">
                                            <div className="price">{goodsPlayMain.includes('goodsPrice') ? '价格' : ''}</div>
                                            <div className="line-price">{goodsPlayMain.includes('goodsLinePrice') ? '划线价格' : ''}</div>
                                        </div>
                                        <div className="sales">{goodsPlayMain.includes('goodsSales') ? '销量' : ''}</div>
                                    </div>
                                    <div className="classify-obj-item">
                                        <img src={Goods1} alt="" />
                                        <div className="goods-name line-clamp2">{goodsPlayMain.includes('goodsName') ? '商品名称' : ''}</div>
                                        <div className="describe line-clamp1">{goodsPlayMain.includes('goodsScr') ? '商品描述' : ''}</div>
                                        <div className="price-wrapper">
                                            <div className="price">{goodsPlayMain.includes('goodsPrice') ? '价格' : ''}</div>
                                            <div className="line-price">{goodsPlayMain.includes('goodsLinePrice') ? '划线价格' : ''}</div>
                                        </div>
                                        <div className="sales">{goodsPlayMain.includes('goodsSales') ? '销量' : ''}</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Col>
                    <Col span={10}>
                        <div className="pageSetWrapper">
                            {/* 图片库组件 */}
                            {this.state.picLibraryStatus ? <PicLibrary picLibraryStatus={this.state.picLibraryStatus} picLibraryBackData={this.picLibraryBackData} /> : ''}
                            <Form
                                name="page_set_form"
                                initialValues={{
                                    // 搜索框
                                    searchTxt:this.state.searchTxt,
                                    searchStyle:this.state.searchStyle,
                                    seachTxtAlign:this.state.seachTxtAlign,
                                    // 轮播
                                    bannerPointColor: this.state.bannerPointColor,
                                    bannerPointShape: this.state.bannerPointShape,
                                    bannerNodesList: this.state.bannerNodesList,
                                    // 导航
                                    navNodesList: navNodesList,
                                    // 系统消息
                                    noticeTopBottomMargin: this.state.noticeTopBottomMargin, 
                                    // 热门推荐
                                    rcmTopBottomMargin: this.state.rcmTopBottomMargin,
                                    recNodesList: recNodesList,
                                     //广告栏 
                                    advTopBottomMargin:this.state.advTopBottomMargin,
                                    advNodesList: advNodesList,
                                    // 商品分类导航
                                    goodsTabTopBottomMargin: this.state.goodsTabTopBottomMargin,
                                    goodsTabNodesList: goodsTabNodesList,
                                    // / 商品
                                    goodsSort: this.state.goodsSort,
                                    goodsPlayMain: this.state.goodsPlayMain,
                                }}
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
                                            initialValue={this.state.bannerPointColor}
                                            onChange={(value) => this.colorPicker('bannerPointColor', value)}
                                            placement="right"
                                        ></InputColor>
                                    </Form.Item>
                                    <Form.Item label="指示点形状" name="bannerPointShape">
                                        <Radio.Group name="bannerPointShape" options={bannerPointShapeOptions} onChange={(e) => this.radioHandle(e)} defaultValue={this.state.bannerPointShape} />
                                    </Form.Item>
                                    {/* <Form.Item label="上下边距" name="bannerTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('bannerTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="bannerLfteRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('bannerLfteRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item> */}
                                    {bannerNodesItems}
                                    <Form.Item>
                                        <Button className="pull-right" type="default" onClick={() => this.addOptionsNodes('bannerNodesList')}>添加一个</Button>
                                    </Form.Item>
                                </div>
                                {/* 导航设置 */}
                                <div className={this.state.tabState === 3 ? 'nav-set active' : 'nav-set tab-obj-item'}>
                                    <h3 className="page-set-title">导航</h3>
                                    <Divider />
                                    {/* <Form.Item label="外框背景颜色" name="navOutBgCol">
                                        <InputColor
                                            initialValue="#ffffff"
                                            onChange={(value) => this.colorPicker('navOutBgCol', value)}
                                            placement="right"
                                        ></InputColor>
                                    </Form.Item>
                                    <Form.Item label="上下边距" name="navTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('navTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="navLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('navLeftRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
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
                                        <Slider onChange={(value) => this.sliderChange('navInsTopMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="右边距" name="navInsRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('navInsRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="下边距" name="navInsBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('navInsBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="左边距" name="navInsLeftMargin">
                                        <Slider onChange={(value) => this.sliderChange('navInsLeftMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="上圆角" name="navInsTopRound">
                                        <Slider onChange={(value) => this.sliderChange('navInsTopRound', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="下圆角" name="navInsBottomRound">
                                        <Slider onChange={(value) => this.sliderChange('navInsBottomRound', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item> */}
                                    {/* <Form.Item label="每行数量" name="navLineNum">
                                        <Radio.Group name="navLineNum" options={navLineNumOptions} onChange={(e) => this.radioHandle(e)} defaultValue={this.state.navLineNum} />
                                    </Form.Item> */}
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
                                        <Slider onChange={(value) => this.sliderChange('noticeTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    {/* <Form.Item label="左右边距" name="noticeLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('noticeLeftRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item> */}
                                </div>
                                {/* 热门推荐 */}
                                <div className={this.state.tabState === 5 ? 'rcm-goods-set active' : 'rcm-goods-set tab-obj-item'}>
                                    <h3 className="page-set-title">推荐</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="rcmTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('rcmTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    {/* <Form.Item label="左右边距" name="rcmLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('rcmLeftRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item> */}
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
                                        <Slider onChange={(value) => this.sliderChange('advTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    {/* <Form.Item label="左右边距" name="advLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('advLeftRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item> */}
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
                                        <Slider onChange={(value) => this.sliderChange('goodsTabTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    {/* <Form.Item label="左右边距" name="goodsTabLeftRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsTabLeftRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item> */}
                                    {goodsTabNodesItem}
                                    <Form.Item>
                                        <Button className="pull-right" type="default" onClick={() => this.addOptionsNodes('goodsTabNodesList')}>添加一个</Button>
                                    </Form.Item>
                                </div>
                                {/* 商品设置 */}
                                <div className={this.state.tabState === 8 ? 'goods-set active' : 'goods-set tab-obj-item'}>
                                    <h3 className="page-set-title">商品</h3>
                                    <Divider />
                                    {/* <Form.Item label="商品分类" name="goodsClassify">
                                        <select className="form-select w100" name="" id="">
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                        </select>
                                    </Form.Item> */}
                                    <Form.Item label="商品排序" name="goodsSort">
                                        <Radio.Group name="goodsSort" options={goodsSortOptions} onChange={(e) => this.radioHandle(e)} defaultValue={this.state.goodsSort} />
                                    </Form.Item>
                                    <Divider />
                                    {/* <Form.Item label="商品上下边距" name="goodsTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="商品左右边距" name="goodsLfteRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsLfteRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="商品图片圆角" name="goodsPicRound">
                                        <Slider onChange={(value) => this.sliderChange('goodsPicRound', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Divider />
                                    <Form.Item label="内框上下边距" name="goodsInsTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsInsTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="内框左右边距" name="goodsInsLfteRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsInsLfteRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Divider />
                                    <Form.Item label="外框上下边距" name="goodsOutTopBottomMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsOutTopBottomMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Form.Item label="外框左右边距" name="goodsOutLfteRightMargin">
                                        <Slider onChange={(value) => this.sliderChange('goodsOutLfteRightMargin', value)} tipFormatter={this.sliderTipFormatter} />
                                    </Form.Item>
                                    <Divider /> */}
                                    <Form.Item label="显示内容" name="goodsPlayMain">
                                        <Checkbox
                                            data-val="goodsName"
                                            defaultChecked={goodsPlayMain.includes('goodsName') ? true : false}
                                            onChange={(e) => this.checkBoxChange('goodsPlayMain', e)}
                                        >
                                            商品名称
                                            </Checkbox>
                                        <Checkbox
                                            data-val="goodsScr"
                                            defaultChecked={goodsPlayMain.includes('goodsScr') ? true : false}
                                            onChange={(e) => this.checkBoxChange('goodsPlayMain', e)}
                                        >
                                            商品描述
                                            </Checkbox>
                                        <Checkbox
                                            data-val="goodsPrice"
                                            defaultChecked={goodsPlayMain.includes('goodsPrice') ? true : false}
                                            onChange={(e) => this.checkBoxChange('goodsPlayMain', e)}
                                        >
                                            商品价格
                                            </Checkbox>
                                        <Checkbox
                                            data-val="goodsLinePrice"
                                            defaultChecked={goodsPlayMain.includes('goodsLinePrice') ? true : false}
                                            onChange={(e) => this.checkBoxChange('goodsPlayMain', e)}
                                        >
                                            商品划线价格
                                            </Checkbox>
                                        <Checkbox
                                            data-val="goodsSales"
                                            defaultChecked={goodsPlayMain.includes('goodsSales') ? true : false}
                                            onChange={(e) => this.checkBoxChange('goodsPlayMain', e)}
                                        >
                                            销量
                                            </Checkbox>
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