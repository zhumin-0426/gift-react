import React, { useState } from 'react'
import { Modal, Button, Row, Col, Select, Upload, message, Pagination } from 'antd';
import Draggable from 'react-draggable';
import '../css/demo.less';
const { Option } = Select;
class Demo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // 显示/隐藏
            visible: false,
            //禁用 是/否
            disabled: true,
            bounds: { left: 0, top: 0, bottom: 0, right: 0 },
            sideList: [
                { id: 1, txt: "1" },
                { id: 2, txt: "2" },
                { id: 3, txt: "3" },
                { id: 4, txt: "4" },
                { id: 5, txt: "5" },
                { id: 6, txt: "6" },
                { id: 7, txt: "7" },
                { id: 8, txt: "8" },
                { id: 9, txt: "9" },
                { id: 10, txt: "10" },
                { id: 11, txt: "11" }
            ],
            currentSideItemId: 0
        };
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

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
        const props = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <>
                <Button onClick={this.showModal}>Open Draggable Modal</Button>
                <Modal
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
                                {sideList.map((item, index) => {
                                    return (
                                        <React.Fragment key={item.id}>
                                            <li
                                                className={this.state.currentSideItemId === index ? "side-item side-item-active" : "side-item"}
                                            >{item.txt}</li>
                                        </React.Fragment>
                                    )
                                })}
                            </ul>
                        </Col>
                        <Col span={20}>
                            <div className="sidebar-change-obj">
                                <div className="top dis-flx justify-space-between">
                                    <div className="left">
                                        <Select defaultValue="lucy" style={{ width: 120 }}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">Lucy</Option>
                                        </Select>
                                        <button type="submit" className="delete-btn"><i className="iconfont icon-shanchu fon-14" style={{
                                            marginRight: 4
                                        }}></i>删除</button>
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

                                </ul>
                                <Pagination className="pull-right" simple defaultCurrent={2} total={2} />
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