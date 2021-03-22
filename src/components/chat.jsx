import React from 'react';
import '../css/chat.less';
// antd 组件
import { Row, Col } from 'antd';
// 图片
import UserPic from '../assets/images/userPic.jpg'
class Chat extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="chat-box bg-fff box-sd pd-15">
                <Row>
                    <Col span={8}>
                        <div className="user-list">
                            <div className="user-search">
                                <input type="search" className="w100 ant-input fon-w-500" placeholder="搜索" name="adminPassword" />
                                {/* <label>
                                    <i className="iconfont icon-sousuo fon-22 text-white"></i>  
                                </label> */}
                            </div>
                            <ul className="list mt-20">
                                <li className="list-item dis-flx align-items-center justify-space-between pb-15 pt-15">
                                    <div className="pic">
                                        <img src={UserPic} />
                                        <div className="status bg-dc3"></div>
                                    </div>
                                    <div className="media-body">
                                        <h6 className="mb-0 dis-flx align-items-center justify-space-between mb-10">
                                            <strong className="fon-16 text-323">Anne Smith</strong>
                                            <small className="text-323">3:26 PM</small>
                                        </h6>
                                        <p className="mb-0 dis-flx align-items-center justify-space-between">
                                            <div className="dis-flx align-items-center" style={{ width: "80%" }}><i className="iconfont icon-check2 fon-12 text-878 mr-5"></i><span className="text-878 line-clamp1">爱上大叔的感觉啊帅哥的就爱个等级</span></div>
                                            <i className="iconfont icon-voice2 fon-14 text-323"></i>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col span={16}>
                        <div className="info-list">
                            <div className="top dis-flx align-items-center justify-space-between bg-f6f mb-20">
                                <h6 className="name"> <strong className="fon-18 text-323">Anne Smith</strong></h6>
                                <div className="app dis-flx align-items-center">
                                    <i className="iconfont icon-video fon-16 text-6c7 mr-20"></i>
                                    <i className="iconfont icon-more fon-16 text-6c7"></i>
                                </div>
                            </div>
                            <div class="msg-box">
                                <div class="service-people">
                                    <img src={UserPic} />
                                    <div class="msg">
                                        <div class="msg-cover">
                                            爱上的好卡是大叔的喀什到喀什到卡上
                                            爱上的好卡是大叔的喀什到喀什到卡上
                                            爱上的好卡是大叔的喀什到喀什到卡上
						                </div>
                                    </div>
                                </div>
                                <div class="user-people">
                                    <img src={UserPic} />
                                    <div class="msg">
                                        <div class="msg-cover">
                                            爱上的好卡是大叔的喀什到喀什到卡上
                                            爱上的好卡是大叔的喀什到喀什到卡上
                                            爱上的好卡是大叔的喀什到喀什到卡上
						                </div>
                                    </div>
                                </div>
                            </div>
                            <div class="send-box">
                                <input class="ipt" type="text" v-model="msg" placeholder="请输入内容" />
                                <div class="btn" type="default"><i className="iconfont icon-clip fon-16"></i></div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="btn-box pd-10 bg-fff">
                     <div className="btn bg-84b text-align"><i className="iconfont icon-xiaoxizhongxin fon-22 text-white"></i></div>
                 </div>
            </div>
        )
    }
}

export default Chat;