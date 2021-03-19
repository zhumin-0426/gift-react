import React from 'react';
// 样式
import '../../css/user.less';
import userPic from '../../assets/images/upload-user-pic.png';
import Icon from '../../assets/icon/02.png';
import Editor from 'react-umeditor';

// antd 组件
import { Row, Col, Breadcrumb, Input } from 'antd';
// 图片库组件
import PicLibrary from '../../components/picLibrary';
const { TextArea } = Input;
class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorStatus: false,
            userName: "",
            password: "",
            phone: "",
            qq: "",
            wx: "",
            // 编辑器
            content: "",
            // 图片库
            picLibraryStatus: false
        }
        this.editor = this.editor.bind(this);
        this.submit = this.submit.bind(this);
        this.picLibraryBackStatus = this.picLibraryBackStatus.bind(this);
        this.picLibraryStatusChange = this.picLibraryStatusChange.bind(this);
    }
    // 编辑
    editor() {
        this.setState({ editorStatus: true })
    }
    // 提交
    submit() {
        console.log("提交")
        this.setState({ editorStatus: false, userName: "", password: "", phone: "", qq: "", wx: "" })
    }
    // input监听
    inputChange(e) {
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
    render() {
        let editorStatus = this.state.editorStatus;
        // 编辑器
        var icons = this.getIcons();
        var plugins = this.getPlugins();
        return (
            <div className="main">
                {/* 图片库组件 */}
                {this.state.picLibraryStatus ? <PicLibrary picLibraryStatus={this.state.picLibraryStatus} picLibraryBackStatus={this.picLibraryBackStatus} /> : ''}
                <Row>
                    <Col span={12}>
                        <h3><strong>用户信息</strong></h3>
                    </Col>
                    <Col span={12} className="text-align-right">
                        <Breadcrumb>
                            <Breadcrumb.Item>系统</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                用户信息
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="user-msg-card w100 box-sd pd-17 bg-fff mb-30">
                            <div className="card-bg w100 box-siz">
                                <div className="user-info pos-a">
                                    <Row>
                                        <Col span={12}>
                                            <div className="dis-flx align-items-center">
                                                <div className="user-pic">
                                                    {/* <img src={userPic} alt="" /> */}
                                                    <div className="cover" onClick={this.picLibraryStatusChange}><img src={userPic} alt="" /></div>
                                                </div>
                                                <div>
                                                    <h2 className="name text-white fon-30 fon-w-700 mb-0">Michael Bean</h2> &nbsp;&nbsp;{editorStatus ? <Input name="userName" className="ant-input-bottom-line pl-11 ant-input-color-fff" placeholder="昵称" onChange={(e) => this.inputChange(e)} /> : ''}
                                                    <p className="lavel text-white">- Admin</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={12} className="text-align-right align-self">
                                            {editorStatus ? <button type="button" className="editor-btn bg-218 text-white fon-14 " onClick={this.submit}><i className="mr-5 iconfont icon-tijiaochenggong"></i>提交</button> : <button type="button" className="editor-btn bg-218 text-white fon-14 " onClick={this.editor}><i className="mr-5 iconfont icon-icon-"></i>编辑</button>}
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={30, 30}>
                    <Col span={8}>
                        <div className="about-me-card box-sd bg-fff pd-17">
                            <div className="title fon-w-500 pb-14 bd-bottom mb-15"><strong>关于我</strong></div>
                            {editorStatus ? <TextArea rows={4} placeholder="描述：" /> : <div className="describe text-626 fon-w-500">
                                I have more than 9 years of experience in the field of Graphic/ E-Learning/Web Designing.
                                Specialized in Adobe web & graphic designing tools and also in other tools. Professional in Corporate branding, Graphic designing, Web Designing, visualization, GUI, graphics & animations for e-learning, illustrations, web icons, logos, brochures, posters etc.
                            </div>}
                            <ul className="mt-20">
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-zhanghao text-84b mr-10 fon-20"></i>
                                    <span className="fon-13 text-626 fon-w-500">admin</span>
                                </li>
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-mima text-17a mr-10 fon-20"></i>
                                    &nbsp;&nbsp;{editorStatus ? <Input name="password" className="ant-input-bottom-line pl-11" placeholder="新密码" onChange={(e) => this.inputChange(e)} /> : <span className="fon-13 text-626 fon-w-500">123456</span>}
                                </li>
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-weibiaoti- text-ffc mr-10 fon-20"></i>
                                    &nbsp;&nbsp;{editorStatus ? <Input name="phone" className="ant-input-bottom-line pl-11" placeholder="电话" onChange={(e) => this.inputChange(e)} /> : <span className="fon-13 text-626 fon-w-500">18820854754</span>}
                                </li>
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-qq text-dc3 mr-10 fon-20"></i>
                                    &nbsp;&nbsp;{editorStatus ? <Input name="qq" className="ant-input-bottom-line pl-11" placeholder="qq" onChange={(e) => this.inputChange(e)} /> : <span className="fon-13 text-626 fon-w-500">1693638322</span>}
                                </li>
                                <li className="dis-flx align-items-center">
                                    <i className="iconfont icon-weixin text-28a mr-10 fon-20"></i>
                                    &nbsp;&nbsp;{editorStatus ? <Input name="wx" className="ant-input-bottom-line pl-11" placeholder="微信" onChange={(e) => this.inputChange(e)} /> : <span className="fon-13 text-626 fon-w-500">1693638322</span>}
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="send-notice-card w100 box-sd pd-17 bg-fff">
                            <div className="title fon-w-500 pb-14 bd-bottom mb-15"><strong>发布通知</strong></div>
                            <Editor ref="editor"
                                icons={icons}
                                value={this.state.content} defaultValue="<p>React Umeditor</p>"
                                onChange={this.handleChange.bind(this)}
                                plugins={plugins} />
                            <button className="send out-line-none mt-30">发布</button>
                        </div>
                        <div className="notice-card w100 box-sd pd-17 bg-fff">
                            <div className="title fon-w-500 pb-14 bd-bottom mb-15"><strong>系统通知</strong></div>
                            <ul>
                                <li className="dis-flx align-items-center bd-bottom">
                                    <img className="" src={Icon} alt="" />
                                    <div>
                                        <h2 className="mb-0">Martin smith </h2>
                                        <p className="fon-13 text-626 line-clamp2">Create tailor-cut websites with the exclusive </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Users;