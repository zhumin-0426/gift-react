import React from 'react';
// 公共组件
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Footer from '../../components/footer';
// 样式
import '../../css/addUser.less';
// antd 组件
import { Row, Col, Breadcrumb, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}
class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        const loginBtn = {
            marginLeft: -4
        }
        return (
            <div className="wrapper">
                <Header />
                <div className="content-wrapper">
                    <Sidebar />
                    <div className="content w100 pd-30">
                        <Row className="content-title mb-10">
                            <Col span={12}>
                                <h3><strong>添加联系人</strong></h3>
                            </Col>
                            <Col span={12} className="text-align-right">
                                <Breadcrumb>
                                    <Breadcrumb.Item>系统</Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        添加联系人
                                    </Breadcrumb.Item>
                                </Breadcrumb>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className="add-user-card box-sd w100 bg-fff pd-17">
                                    <h3 className="text-626 bd-bottom pb-14 mb-15 fon-w-700 fon-14">添加联系人</h3>
                                    <div className="form-item username mb-20">
                                        <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">姓名*</label>
                                        <input className="w100 ant-input fon-w-500" type="text" placeholder="请输入用户姓名" />
                                    </div>
                                    <div className="form-item username mb-20">
                                        <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">头像*</label>
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            beforeUpload={beforeUpload}
                                            onChange={this.handleChange}
                                        >
                                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                        </Upload>
                                    </div>
                                    <div className="form-item username mb-20">
                                        <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">账号*</label>
                                        <input className="w100 ant-input fon-w-500" type="password" placeholder="请输入用户账号" />
                                    </div>
                                    <div className="form-item username mb-20">
                                        <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">电话*</label>
                                        <input className="w100 ant-input fon-w-500" type="password" placeholder="请输入用户联系电话" />
                                    </div>
                                    <div className="form-item username mb-20">
                                        <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">QQ*</label>
                                        <input className="w100 ant-input fon-w-500" type="password" placeholder="请输入用户QQ" />
                                    </div>
                                    <div className="form-item username mb-20">
                                        <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">微信*</label>
                                        <input className="w100 ant-input fon-w-500" type="password" placeholder="请输入用户微信" />
                                    </div>
                                    <div className="form-item username mb-20">
                                        <label className="w100 dis-block mb-10 fon-13 text-626 fon-w-500">描述*</label>
                                        <textarea className="ant-textarea fon-w-500 w100" name="" id="" cols="30" rows="10" placeholder="请输入用户描述"></textarea>
                                    </div>
                                    <div className="form-item">
                                        <button type="submit" className="login-btn">添加 <i className="iconfont icon-adduser fon-14" style={loginBtn}></i></button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default AddUser;