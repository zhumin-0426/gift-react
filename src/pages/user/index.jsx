import React from 'react';
import axios from '../../common/js/axios';
// 样式
import '../../css/user.less';
import userPic from '../../assets/images/upload-user-pic.png';
import Icon from '../../assets/icon/02.png';
import Editor from 'react-umeditor';

// antd 组件
import { Row, Col, Breadcrumb } from 'antd';
// 图片库组件
import PicLibrary from '../../components/picLibrary';
class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editorStatus: false,
            adminAccount: "",
            adminPassword: "",
            userName: "",
            describe: "",
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
        this.initUsersData = this.initUsersData.bind(this);
    }
    componentDidMount() {
        this.initUsersData()
    }
    // 数据初始化
    initUsersData() {
        let params = {
            userId: localStorage.getItem("userId")
        }
        axios.getAxios('/users', params).then(res => {
            console.log("res", res);
            if (res.status === 200) {
                this.setState({
                    adminAccount: res.data.adminAccount,
                    adminPassword: res.data.adminPassword,
                    userName: res.data.userName,
                    describe: res.data.describe,
                    phone: res.data.phone,
                    qq: res.data.qq,
                    wx: res.data.wx,
                })
            }
        })
    }
    // 编辑
    editor() {
        this.setState({ editorStatus: true })
    }
    // 提交
    submit(event) {
        let data = {
            userId: localStorage.getItem("userId"),
            userName: this.state.userName,
            describe: this.state.describe,
            adminAccount: this.state.adminAccount,
            adminPassword: this.state.adminPassword,
            phone: this.state.phone,
            qq: this.state.qq,
            wx: this.state.wx,
        }
        console.log("data", data);
        axios.postAxios('/users/editor', data).then(res => {
            console.log('res', res);
            if (res.data.status === "success") {
                this.initUsersData()
            }
        });
        this.setState({ editorStatus: false })
        event.preventDefault()
    }
    // input监听
    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // 富文本编辑器
    handleChange(content) {
        console.log("content", content);
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
    getQiniuUploader() {
        return {
            // 上传路径
            url: 'api/users/sendNotice/uploadImg',
            // 只要type部位qiniu 就可以自定义上传
            type: 'local',
            // 服务器需要的字段，即表单名称
            name: "file",
            // 请求返回字段名
            request: "image_src",
            // filter:"",
            // qiniu: {
            //     app: {
            //         Bucket: "liuhong1happy",
            //         AK: "l9vEBNTqrz7H03S-SC0qxNWmf0K8amqP6MeYHNni",
            //         SK: "eizTTxuA0Kq1YSe2SRdOexJ-tjwGpRnzztsSrLKj"
            //     },
            //     domain: "http://o9sa2vijj.bkt.clouddn.com",
            //     genKey: function (options) {
            //         return options.file.type + "-" + options.file.size + "-" + options.file.lastModifiedDate.valueOf() + "-" + new Date().valueOf() + "-" + options.file.name;
            //     }
            // }
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
        var uploader = this.getQiniuUploader();
        var plugins = {
            image: {
                uploader: uploader
            }
        };
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
                <form>
                    <Row>
                        <Col span={24}>
                            <div className="user-msg-card w100 box-sd pd-17 bg-fff mb-30">
                                <div className="card-bg w100 box-siz">
                                    <div className="user-info pos-a">
                                        <Row>
                                            <Col span={12}>
                                                <div className="dis-flx align-items-center">
                                                    <div className="user-pic">
                                                        <div className="cover" onClick={this.picLibraryStatusChange}><img src={userPic} alt="" /></div>
                                                    </div>
                                                    <div>
                                                        {this.state.userName === "" ? <h2 className="name text-white fon-30 fon-w-700 mb-0">未填写</h2> : <h2 className="name text-white fon-30 fon-w-700 mb-0">{this.state.userName}</h2>}
                                                        &nbsp;&nbsp;{editorStatus ? <input value={this.state.userName} name="userName" className="input-bottom-line pl-11 ant-input-color-fff" placeholder="昵称" onChange={(e) => this.inputChange(e)} /> : ''}
                                                        <p className="lavel text-white">- Admin</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col span={12} className="text-align-right align-self">
                                                {editorStatus ?
                                                    <button type="submit" className="editor-btn bg-218 text-white fon-14 " onClick={this.submit}><i className="mr-5 iconfont icon-tijiaochenggong"></i>提交</button>
                                                    : <button type="button" className="editor-btn bg-218 text-white fon-14 " onClick={this.editor}><i className="mr-5 iconfont icon-icon-"></i>编辑</button>}
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
                                {editorStatus ? <textarea name="describe" value={this.state.describe} className="ant-textarea w100" placeholder="描述：" onChange={(e) => this.inputChange(e)} /> : <div className="describe text-626 fon-w-500">
                                    描述：{this.state.describe === "" ? "未填写" : this.state.describe}
                                </div>}
                                <ul className="mt-20">
                                    <li className="dis-flx align-items-center">
                                        <i className="iconfont icon-zhanghao text-84b mr-10 fon-20"></i>
                                        <span className="fon-13 text-626 fon-w-500">{this.state.adminAccount}</span>
                                    </li>
                                    <li className="dis-flx align-items-center">
                                        <i className="iconfont icon-mima text-17a mr-10 fon-20"></i>
                                        {editorStatus ? <input name="adminPassword" value={this.state.adminPassword} className="input-bottom-line pl-11" placeholder="密码" onChange={(e) => this.inputChange(e)} /> : <span className="fon-13 text-626 fon-w-500">
                                            {
                                                this.state.adminPassword
                                            }
                                        </span>}
                                    </li>
                                    <li className="dis-flx align-items-center">
                                        <i className="iconfont icon-weibiaoti- text-ffc mr-10 fon-20"></i>
                                        {editorStatus ? <input value={this.state.phone} name="phone" className="input-bottom-line pl-11" placeholder="电话" onChange={(e) => this.inputChange(e)} /> : <span className="fon-13 text-626 fon-w-500">
                                            {
                                                this.state.phone === "" ? "未填写" : this.state.phone
                                            }
                                        </span>}
                                    </li>
                                    <li className="dis-flx align-items-center">
                                        <i className="iconfont icon-qq text-dc3 mr-10 fon-20"></i>
                                        {editorStatus ? <input value={this.state.qq} name="qq" className="input-bottom-line pl-11" placeholder="qq" onChange={(e) => this.inputChange(e)} /> : <span className="fon-13 text-626 fon-w-500">
                                            {
                                                this.state.qq === "" ? "未填写" : this.state.qq
                                            }
                                        </span>}
                                    </li>
                                    <li className="dis-flx align-items-center">
                                        <i className="iconfont icon-weixin text-28a mr-10 fon-20"></i>
                                        {editorStatus ? <input value={this.state.wx} name="wx" className="input-bottom-line pl-11" placeholder="微信" onChange={(e) => this.inputChange(e)} /> : <span className="fon-13 text-626 fon-w-500">
                                            {
                                                this.state.wx === "" ? "未填写" : this.state.wx
                                            }
                                        </span>}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col span={16}>
                            <div className="send-notice-card w100 box-sd pd-17 bg-fff">
                                <div className="title fon-w-500 pb-14 bd-bottom mb-15"><strong>发布通知</strong></div>
                                <Editor ref="editor"
                                    icons={icons}
                                    value={this.state.content}
                                    defaultValue="<p>React Umeditor</p>"
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
                </form>
            </div>
        )
    }
}

export default Users;