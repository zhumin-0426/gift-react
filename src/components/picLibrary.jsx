import React from 'react'
import { Modal, Button, Row, Col, Select, message, Pagination, Input, Popconfirm } from 'antd';
import { QuestionCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import Delete from '../assets/images/pageDesign/delete.png';
import Editor from '../assets/images/pageDesign/editor.png';
import Checkout from '../assets/images/checkout.png';
import axios from '../common/js/axios';
import styles from '../css/picLibrary.module.css';
const { Option } = Select;
const { confirm } = Modal;
// 对话框=>确认
function showConfirm() {
    confirm({
        centered: true,
        title: '确定移动该图片吗?',
        okText: "确定",
        cancelText: "取消",
        icon: <ExclamationCircleOutlined />,
        content: '移动后将不在该分组内',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}
// 对话框=> 添加分组
class AddGroup extends React.Component {
    constructor(props) {
        console.log('props', props)
        super(props)
        this.state = {
            isModalVisible: this.props.isModalVisible,
            picGroupName: "",
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.iptHandle = this.iptHandle.bind(this)
    }
    // 确认按钮
    handleOk() {
        this.setState({
            isModalVisible: false
        })
        console.log(this.state.picGroupName);
        const data = { picGroupName: this.state.picGroupName }
        axios.postAxios('/picUpload/addPicSideBar', data).then(res => {
            console.log("res", res);
        })
        this.props.changeAddGroupStatus(this.state.isModalVisible)
    };
    // 取消按钮
    handleCancel() {
        this.setState({
            isModalVisible: false
        })
        this.props.changeAddGroupStatus(this.state.isModalVisible)
    };
    // input监听
    iptHandle(e) {
        console.log('e', e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <Modal centered title="添加分组" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} cancelText="取消"
                    okText="确定"
                    width="320px"
                    centered>
                    <Input name="picGroupName" onChange={this.iptHandle} placeholder="分组名称" />
                </Modal>
            </>
        );
    }
}
// 对话框=> 图片库
class PicLibrary extends React.Component {
    constructor(props) {
        super(props)
        console.log("props", props)
        this.state = {
            // 显示/隐藏
            visible: this.props.picLibraryStatus,
            //禁用 是/否
            disabled: true,
            bounds: { left: 0, top: 0, bottom: 0, right: 0 },
            // 侧边栏列表
            sideList: [
                { id: 1, txt: "1" }
            ],
            currentSideItemId: 0,
            // 添加分组
            isModalVisible: false,
            picGroupName: "",
            // 图片列表
            picList: [
                { id: 0, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "1", coverBol: false, },
                { id: 1, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "2", coverBol: false },
                { id: 2, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "1", coverBol: false },
                { id: 3, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "1", coverBol: false },
                { id: 4, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "1", coverBol: false },
                { id: 5, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "1", coverBol: false },
                { id: 6, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "1", coverBol: false },
                { id: 7, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "1", coverBol: false },
                { id: 8, imgUrl: "https://www.chaorenmall.com/uploads/1/202103151505592d64e7876.jpg", picName: "1", coverBol: false },
            ],
            picCollection: []
        }
        this.sideItemChange = this.sideItemChange.bind(this)
        this.addGroupChange = this.addGroupChange.bind(this)
        this.changeAddGroupStatus = this.changeAddGroupStatus.bind(this)
        this.movePic = this.movePic.bind(this)
        this.deletePic = this.deletePic.bind(this)
        this.editorGroup = this.editorGroup.bind(this)
        this.deleteGroup = this.deleteGroup.bind(this)
        this.ckeckPic = this.ckeckPic.bind(this)
        this.pageChange = this.pageChange.bind(this)
        this.upLoadFile = this.upLoadFile.bind(this)
        this.initpicLibrary = this.initpicLibrary.bind(this)
    }
    componentDidMount() {
        this.initpicLibrary()
    }
    /*
     初始化侧边栏数据
    */
    initpicLibrary() {
        axios.getAxios('/picUpload/index', {}, (res) => {
            console.log("res", res)
        })
    }
    // 对话框显示
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    // 对话框隐藏
    handleOk = e => {
        this.setState({
            visible: false,
        });
        this.props.picLibraryBackStatus(this.state.visible)
    };
    // 对话框=>删除/取消/背景
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
        this.props.picLibraryBackStatus(this.state.visible)
    };
    // 侧边栏点击事件
    sideItemChange(e) {
        console.log("b")
        let groupId = Number(e.target.dataset.groupId);
        this.setState({
            currentSideItemId: groupId
        })
    }
    // 添加分组
    addGroupChange() {
        this.setState({ isModalVisible: true })
    }
    // 编辑分组
    editorGroup(e) {
        e.stopPropagation();
        this.setState({ isModalVisible: true })
    }
    // 删除分组
    deleteGroup(e) {
        e.stopPropagation();
    }
    // 子组件传值
    changeAddGroupStatus(data) {
        this.setState({
            isModalVisible: !data
        })
    }
    // 移动图片
    movePic() {
        console.log("a")
        showConfirm()
    }
    // 删除图片
    deletePic() {
        console.log("a")
    }
    // 选取图片
    ckeckPic(index) {
        let picList = this.state.picList;
        let picCollection = this.state.picCollection;
        picList[index].coverBol = !picList[index].coverBol;
        this.setState(picList);
        if (picList[index].coverBol) {
            picCollection.push(picList[index].imgUrl)
        } else {
            picCollection.splice(picCollection.indexOf(picList[index].imgUrl), 1)
        }
        this.setState(picCollection);
        console.log('picCollection', picCollection)
    }
    // 分页
    pageChange(page, pageSize) {
        console.log('page', page);
        console.log('pageSize', pageSize);
    }
    onStart = (event, uiData) => {
        const { clientWidth, clientHeight } = window?.document?.documentElement;
        const targetRect = this.draggleRef?.current?.getBoundingClientRect();
        this.setState({
            bounds: {
                left: -targetRect?.left + uiData?.x,
                right: clientWidth - (targetRect?.right - uiData?.x),
                top: -targetRect?.top + uiData?.y,
                bottom: clientHeight - (targetRect?.bottom - uiData?.y),
            },
        });
    };
    draggleRef = React.createRef();
    // 图片上传
    upLoadFile(e) {
        console.log('files', e.target.files);
        e.preventDefault();
        let file = e.target.files[0];
        const formdata = new FormData();
        formdata.append('file', file);
        axios.postAxios('/picUpload/upload', formdata).then(res => {
            console.log('res', res)
        })
    }
    render() {
        const { bounds, disabled, visible } = this.state;
        let sideList = this.state.sideList;
        return (
            <>
                {this.state.isModalVisible ? <AddGroup isModalVisible={this.state.isModalVisible} changeAddGroupStatus={this.changeAddGroupStatus} /> : ''}
                <Modal
                    centered
                    title={
                        <div
                            style={{
                                width: '100%',
                                cursor: 'move',
                            }}
                            onMouseOver={() => {
                                if (disabled) {
                                    this.setState({
                                        disabled: false,
                                    });
                                }
                            }}
                            onMouseOut={() => {
                                this.setState({
                                    disabled: true,
                                });
                            }}
                            // fix eslintjsx-a11y/mouse-events-have-key-events
                            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
                            onFocus={() => { }}
                            onBlur={() => { }}
                        // end
                        >
                            图片库
                        </div>
                    }
                    visible={visible}
                    // 点击确定回调
                    onOk={this.handleOk}
                    // 点击遮罩层或右上角叉或取消按钮的回调
                    onCancel={this.handleCancel}
                    // 自定义渲染对话框
                    modalRender={modal => (
                        <Draggable
                            disabled={disabled}
                            bounds={bounds}
                            onStart={(event, uiData) => this.onStart(event, uiData)}
                        >
                            <div ref={this.draggleRef}>{modal}</div>
                        </Draggable>
                    )}
                    cancelText="取消"
                    okText="确定"
                    width="840px"
                    bodyStyle={{ padding: "0" }}
                >
                    <Row>
                        <Col span={4}>
                            <ul className={styles.sidebar}>
                                <li className={this.state.currentSideItemId === 0 ? "side-item side-item-active" : "side-item"} data-group-id={0} onClick={this.sideItemChange}>全部</li>
                                <li className={this.state.currentSideItemId === 1 ? "side-item side-item-active" : "side-item"} data-group-id={1} onClick={this.sideItemChange}>未分组</li>
                                {sideList.map((item, index) => {
                                    return (
                                        <React.Fragment key={item.id}>
                                            <li
                                                className={this.state.currentSideItemId === index + 2 ? "new-side-item side-item side-item-active" : "  new-side-item side-item"}
                                                data-group-id={index + 2}
                                                onClick={this.sideItemChange}
                                            >
                                                <div className="editor" onClick={this.editorGroup}><img src={Editor} alt="" /></div>
                                                {item.txt}
                                                <Popconfirm cancelText="取消" okText="确定" title="确定删除该分组吗？" onConfirm={this.deleteGroup} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                                    <div className="delete"><img src={Delete} alt="" /></div>
                                                </Popconfirm>
                                            </li>
                                        </React.Fragment>
                                    )
                                })}
                            </ul>
                            <div className={styles.addGroup} onClick={this.addGroupChange}>新增分组</div>
                        </Col>
                        <Col span={20}>
                            <div className={styles.sidebarChangeObj}>
                                <div className="top dis-flx justify-space-between">
                                    <div className="left">
                                        <Select placeholder="移动图片" style={{ width: 120 }} onSelect={this.movePic}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                        </Select>
                                        <Popconfirm cancelText="取消" okText="确定" title="确定删除吗？" onConfirm={this.deletePic} icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                                            <button type="button" className="delete-btn"><i className="iconfont icon-shanchu fon-14" style={{
                                                marginRight: 4
                                            }}></i>删除</button>
                                        </Popconfirm>
                                    </div>
                                    <div className="right">
                                        <button className="upload-file">
                                            <i className="iconfont icon-tianjia fon-14" style={{
                                                marginRight: 4
                                            }}></i>
                                              上传图片
                                              <input type="file" onChange={this.upLoadFile} />
                                        </button>
                                    </div>
                                </div>
                                <ul className="content">
                                    {this.state.picList.map((item, index) => {
                                        return (
                                            <React.Fragment key={item.id}>
                                                <li onClick={() => this.ckeckPic(index)}>
                                                    <div className="img-box">
                                                        <div className="img" style={{ backgroundImage: "url(" + `${item.imgUrl}` + ")" }}></div>
                                                        <p className="line-clamp1">{item.picName}</p>
                                                        <div className={item.coverBol ? "cover cover-active" : "cover"}>
                                                            <img src={Checkout} alt="" />
                                                        </div>
                                                    </div>
                                                </li>
                                            </React.Fragment>
                                        )
                                    })}
                                </ul>
                                <Pagination className="pull-right" simple pageSize={12} total={50} onChange={this.pageChange} />
                            </div>
                        </Col>
                    </Row>
                </Modal>
            </>
        );
    }
}

export default PicLibrary