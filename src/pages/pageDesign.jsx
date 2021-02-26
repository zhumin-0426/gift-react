import React from 'react';
// 样式
import styles from '../css/pageDesign.module.css';
// 图片
import PageDesignLogo from '../assets/images/pageDesign/logo.png';
import SearchIcon from '../assets/images/pageDesign/search-icon.png';
import Scan from '../assets/images/pageDesign/scan.png';
import UserPic from '../assets/images/pageDesign/user-pic.png';
import Banner from '../assets/images/pageDesign/banner.png';
import NavIcon from '../assets/images/pageDesign/nav-item-icon1.png';
import TigIcon from '../assets/images/pageDesign/tig-icon.png';
import goodsBarItem1 from '../assets/images/pageDesign/goods-bar-item1.png';
import goodsBarItem2 from '../assets/images/pageDesign/goods-bar-item2.png';
import goodsBarItem3 from '../assets/images/pageDesign/goods-bar-item3.png';
import Adversing from '../assets/images/pageDesign/adversing.png';
import Goods1 from '../assets/images/pageDesign/goods1.png';
// antd 组件
import { Row, Col, Breadcrumb, Divider, Form, Input, Radio, Slider, Checkbox, Button } from 'antd';
// 拾色器
import InputColor from 'react-input-color';
function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [{
                txt: "你是堆狗屎"
            }]
        }
        this.addNodes = this.addNodes.bind(this)
    }
    addNodes() {
        let arr = this.state.arr;
        let newArr = {
            txt:"你是第二堆狗屎"
        }
        arr.push(newArr);
        this.setState(arr);
    }
    render() {
        let arr = this.state.arr;
        let element = arr.map((item) =>
            <div className="demo-child-nodes" >{item.txt}</div>
        )
        return (
            <div className="demo">
                {element}
                <button onClick={this.addNodes}>点击添加</button>
            </div>
        )
    }
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
            // 轮播formshuju
            bannerPointShape: "square",
            // 
        }
        this.tabHandle = this.tabHandle.bind(this);
        this.searchIptHandle = this.searchIptHandle.bind(this);
        this.radioHandle = this.radioHandle.bind(this);
        this.sliderHandle = this.sliderHandle.bind(this);
        this.colorPicker = this.colorPicker.bind(this);
        this.iptChange = this.iptChange.bind(this);
    }
    // 点击切换
    tabHandle(e) {
        const tabStateVal = Number(e.target.dataset.tabstate);
        this.setState({
            tabState: tabStateVal
        })
    }
    // 搜索输入框监听
    searchIptHandle(e) {
        this.setState({
            searchTxt: e.target.defaultValue
        })
    }
    // 单选按钮
    radioHandle(name, e) {
        console.log('name', name);
        console.log('radio1 checked', e.target.value);
    }
    // 滑动输入条
    sliderHandle(name, value) {
        console.log('name', name)
        console.log('value', `${value}%`);
        return `${value}%`;
    }
    // 颜色选择
    colorPicker = (name, value) => {
        console.log("name", name);
        let color = value.rgba;
    }
    // 输入框
    iptChange(name, e) {
        console.log(name);
        console.log(e.target.value);
        let val = e.target.value;
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
        // 表单提交成功
        const onFinish = (values: any) => {
            console.log('Success:', values);
        };
        // 表单提交失败
        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
        };
        return (
            <div className="main">
                <Demo />
                <Row className="content-title mb-10">
                    <Col span={12}>
                        <h2>页面设计</h2>
                        {/* <Demo /> */}
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
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}>
                                {/* 搜索设置 */}
                                <div className={this.state.tabState === 1 ? 'search-set active' : 'search-set tab-obj-item'}>
                                    <h3 className="page-set-title">搜索框</h3>
                                    <Divider />
                                    <Form.Item label="搜索文字" name="searchTxt">
                                        <Input value="搜索商品" onChange={this.searchIptHandle} />
                                    </Form.Item>
                                    <Form.Item label="搜索框样式" name="searchStyle">
                                        <Radio.Group options={searchSearchStyleOptions} onChange={(e) => this.radioHandle("searchStyle", e)} defaultValue={this.state.searchStyle} />
                                    </Form.Item>
                                    <Form.Item label="文字对齐方式" name="seachTxtAlign">
                                        <Radio.Group options={seachTxtAlignOptions} onChange={(e) => this.radioHandle("seachTxtAlign", e)} defaultValue={this.state.seachTxtAlign} />
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
                                        <Radio.Group options={bannerPointShapeOptions} onChange={(e) => this.radioHandle("bannerPointShape", e)} defaultValue={this.state.bannerPointShape} />
                                    </Form.Item>
                                    <Form.Item label="上下边距" name="bannerTopBottomMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('bannerTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="bannerLfteRightMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('bannerLfteRightMargin', value)} />
                                    </Form.Item>
                                    <div className="from-item pd-17 bg-f7f bor-rds-3 mb-20">
                                        <Form.Item label="图片" name="bannerPic">
                                            <input type="file" name="bannerPic" />
                                        </Form.Item>
                                        <Form.Item label="H5链接" name="bannerLink">
                                            <input type="text" onChange={(e) => this.iptChange('bannerLink', e)} className="w100 bd-no bd-bottom bg-f7f out-line-none" />
                                        </Form.Item>
                                    </div>
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
                                        <Slider tipFormatter={(value) => this.sliderHandle('navTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="navLeftRightMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('navLeftRightMargin', value)} />
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
                                        <Slider tipFormatter={(value) => this.sliderHandle('navInsTopMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="右边距" name="navInsRightMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('navInsRightMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="下边距" name="navInsBottomMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('navInsBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左边距" name="navInsLeftMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('navInsLeftMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="上圆角" name="navInsTopRound">
                                        <Slider tipFormatter={(value) => this.sliderHandle('navInsTopRound', value)} />
                                    </Form.Item>
                                    <Form.Item label="下圆角" name="navInsBottomRound">
                                        <Slider tipFormatter={(value) => this.sliderHandle('navInsBottomRound', value)} />
                                    </Form.Item>
                                    <Form.Item label="每行数量" name="navLineNum">
                                        <Radio.Group defaultValue="3">
                                            <Radio value="3">3</Radio>
                                            <Radio value="4">4</Radio>
                                            <Radio value="5">5</Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                    <div className="from-item pd-17 bg-f7f bor-rds-3 mb-20">
                                        <Form.Item label="图片" name="navPic">
                                            <input type="file" name="navPic" />
                                        </Form.Item>
                                        <Form.Item label="文字内容" name="navTxt">
                                            <input className="w100 bd-no bd-bottom bg-f7f" name="navTxt" type="text" />
                                        </Form.Item>
                                        <Form.Item label="文字颜色" name="navTxtCol">
                                            <InputColor
                                                initialValue="#ffffff"
                                                onChange={(value) => this.colorPicker('navTxtCol', value)}
                                                placement="right"
                                            ></InputColor>
                                        </Form.Item>
                                        <Form.Item label="H5链接" name="navLink">
                                            <input className="w100 bd-no bd-bottom bg-f7f" type="text" />
                                        </Form.Item>
                                    </div>
                                </div>
                                {/* 消息提示 */}
                                <div className={this.state.tabState === 4 ? 'notice-set active' : 'notice-set tab-obj-item'}>
                                    <h3 className="page-set-title">消息</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="noticeTopBottomMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('noticeTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="noticeLeftRightMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('noticeLeftRightMargin', value)} />
                                    </Form.Item>
                                </div>
                                {/* 热门推荐 */}
                                <div className={this.state.tabState === 5 ? 'rcm-goods-set active' : 'rcm-goods-set tab-obj-item'}>
                                    <h3 className="page-set-title">推荐</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="rcmTopBottomMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('rcmTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="rcmLeftRightMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('rcmLeftRightMargin', value)} />
                                    </Form.Item>
                                    <div className="from-item pd-17 bg-f7f bor-rds-3 mb-20">
                                        <Form.Item label="图片" name="rcmPic">
                                            <input type="file" name="rcmPic" />
                                        </Form.Item>
                                        <Form.Item label="H5链接" name="RcmLink">
                                            <input className="w100 bd-no bd-bottom bg-f7f" type="text" />
                                        </Form.Item>
                                    </div>
                                </div>
                                {/* 广告 */}
                                <div className={this.state.tabState === 6 ? 'adv-set active' : 'adv-set tab-obj-item'}>
                                    <h3 className="page-set-title">广告栏</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="advTopBottomMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('advTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="advLeftRightMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('advLeftRightMargin', value)} />
                                    </Form.Item>
                                    <div className="from-item pd-17 bg-f7f bor-rds-3 mb-20">
                                        <Form.Item label="图片" name="advPic">
                                            <input type="file" name="" id="" />
                                        </Form.Item>
                                        <Form.Item label="H5链接" name="advLink">
                                            <input className="w100 bd-no bd-bottom bg-f7f" type="text" />
                                        </Form.Item>
                                    </div>
                                </div>
                                {/* 商品分类导航设置 */}
                                <div className={this.state.tabState === 7 ? 'goods-tab-set active' : 'goods-tab-set tab-obj-item'}>
                                    <h3 className="page-set-title">商品分类导航</h3>
                                    <Divider />
                                    <Form.Item label="上下边距" name="goodsTabTopBottomMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('goodsTabTopBottomMargin', value)} />
                                    </Form.Item>
                                    <Form.Item label="左右边距" name="goodsTabLeftRightMargin">
                                        <Slider tipFormatter={(value) => this.sliderHandle('goodsTabLeftRightMargin', value)} />
                                    </Form.Item>
                                    <div className="from-item pd-17 bg-f7f bor-rds-3 mb-20">
                                        <Form.Item label="标题" name="goodsTabTitle">
                                            <input className="w100 bd-no bd-bottom bg-f7f" type="text" />
                                        </Form.Item>
                                        <Form.Item label="描述文字" name="goodsTabDec">
                                            <input className="w100 bd-no bd-bottom bg-f7f" type="text" />
                                        </Form.Item>
                                    </div>
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
                                    <Button type="primary" htmlType="submit">保存页面</Button>
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