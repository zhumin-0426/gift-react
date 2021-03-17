import React, { useState } from 'react'
import { Modal, Button, Row, Col, Select, Upload, message, Pagination, Input, Popconfirm, Space } from 'antd';
import { QuestionCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import Draggable from 'react-draggable';
import Delete from '../assets/images/pageDesign/delete.png';
import Editor from '../assets/images/pageDesign/editor.png';
import Checkout from '../assets/images/checkout.png';
import axios from '../common/js/axios';
import '../css/demo.less';
const { Option } = Select;
const { confirm } = Modal;
// 文件上传
// class Demo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.upLoadFile = this.upLoadFile.bind(this);
//     }
//     upLoadFile(e) {
//         console.log("e", e);
//         console.log('files', e.target.files);
//         e.preventDefault();
//         let file = e.target.files[0];
//         const formdata = new FormData();
//         formdata.append('file', file);
//         axios.postAxios('/pageDesign/index', formdata).then(res => {
//             console.log('res',res)
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <input type="file" onChange={this.upLoadFile} />
//             </div>
//         )
//     }
// }
// 确认对话框
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
// 对话框
class AddGroup extends React.Component {
    constructor(props) {
        console.log('props', props)
        super(props)
        this.state = {
            isModalVisible: this.props.isModalVisible
        }
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleOk() {
        this.setState({
            isModalVisible: false
        })
        this.props.changeAddGroupStatus(this.state.isModalVisible)
    };

    handleCancel() {
        this.setState({
            isModalVisible: false
        })
        this.props.changeAddGroupStatus(this.state.isModalVisible)
    };
    render() {
        return (
            <>
                <Modal centered title="添加分组" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} cancelText="取消"
                    okText="确定"
                    width="320px"
                    centered>
                    <Input placeholder="分组名称" />
                </Modal>
            </>
        );
    }
}
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // 显示/隐藏
            visible: false,
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
    };
    // 对话框=>删除/取消
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
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
    pageChange(page, pageSize){
        console.log('page',page);
        console.log('pageSize',pageSize);
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
    render() {
        const { bounds, disabled, visible } = this.state;
        let sideList = this.state.sideList;
        return (
            <>
                {this.state.isModalVisible ? <AddGroup isModalVisible={this.state.isModalVisible} changeAddGroupStatus={this.changeAddGroupStatus} /> : ''}
                <Button onClick={this.showModal}>Open Draggable Modal</Button>
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
                            <ul className="sidebar">
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
                            <div className="add-group" onClick={this.addGroupChange}>新增分组</div>
                        </Col>
                        <Col span={20}>
                            <div className="sidebar-change-obj">
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
                                        <div className="upload-file">
                                            <i className="iconfont icon-tianjia fon-14" style={{
                                                marginRight: 4
                                            }}></i>
                                              上传图片
                                              <input type="file" />
                                        </div>
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
                                <Pagination className="pull-right" simple pageSize={12} total={50} onChange={this.pageChange}/>
                            </div>
                        </Col>
                    </Row>
                </Modal>
            </>
        );
    }
}
// import { Form, Input, Button, Row, Col } from 'antd'

// const Demo = () => {
//     const [contacts, setContacts] = useState([{ name: 'zhangsan', mobile: '15011176302' }]);
//     console.log('contacts', contacts)
//     // 提交
//     const [form] = Form.useForm()
//     const submitForm = () => {
//         form.validateFields()
//             .then(values => {
//                 console.log(values);
//             })
//     }
//     // 添加
//     const add = () => {
//         form.setFieldsValue({ "contacts": [...contacts, { name: '', mobile: '' }] })
//         return setContacts([...contacts, { name: '', mobile: '' }])
//     }
//     // 删除
//     const del = (index) => {
//         form.setFieldsValue({ "contacts": [...contacts.slice(0, index), ...contacts.slice(index + 1)] })
//         return setContacts([...contacts.slice(0, index), ...contacts.slice(index + 1)])
//     }
//     // 输入框监听
//     const onChange = (index, name, event) => {
//         let tempArray = [...contacts];
//         if ('name' === name)
//             tempArray[index] = { ...tempArray[index], name: event.target.value }
//         else
//             tempArray[index] = { ...tempArray[index], mobile: event.target.value }
//         return setContacts(tempArray)
//     }
//     const contactsItems = contacts.map((item, index) => {
//         return <Row key={index}>
//             <Col span={10}>
//                 <Form.Item label="name" name={['contacts', index, 'name']}><Input onChange={(event) => onChange(index, 'name', event)} /></Form.Item>
//             </Col>
//             <Col span={10}>
//                 <Form.Item label="mobile" name={['contacts', index, 'mobile']} ><Input onChange={(event) => onChange(index, 'mobile', event)} /></Form.Item>
//             </Col>
//             <Col span={3} offset={1}>
//                 <Button type="primary" onClick={() => del(index)}>-</Button>
//             </Col>
//         </Row>
//     })
//     return <Row>
//         <Col>
//             <Form name="user_form" form={form} layout={'horizontal'} onFinish={submitForm} initialValues={{ contacts: contacts }}>
//                 <Form.Item label="username" name="username">
//                     <Input />
//                 </Form.Item>
//                 <Form.Item label="contacts">
//                     {contactsItems}
//                 </Form.Item>
//                 <Form.Item><Button type="primary" onClick={add}>+</Button></Form.Item>
//                 <Form.Item>
//                     <Button type="primary" htmlType='submit'>submit</Button>
//                 </Form.Item>
//             </Form>
//         </Col>
//     </Row>
// }
export default Demo