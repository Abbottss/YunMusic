import React from "react";
import "../aseets/style/drawer.css"
import "../aseets/style/background.css"
import { Drawer, Button, Radio } from 'antd';
import { Upload, Icon, message ,Badge} from 'antd';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Link,
	withRouter
} from "react-router-dom";
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
 class DrawerLeft extends React.Component{
    state = { visible: false, placement: 'left',loading: false };
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
    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render(){
    const uploadButton = (
        <div>
            <div className="ant-upload-text">上传<br/>头像</div>
        </div>
    );
    const { imageUrl } = this.state;
        return (
            //外部点击进入抽屉（个人信息）
            <div className="iconfont-div">          
                <Button  onClick={this.showDrawer}>
                    <i className="iconfont">&#xe60a;</i>
                </Button>
                <Drawer
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
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
                    <Router>
                        <div className="top">
                            <Link to={"/"} className="news">
                                <Badge count={5}>
                                    <i className="iconfont">&#xe62a;</i>
                                </Badge>
                            我的消息</Link>
                            <Link to={"/"}><i className="iconfont" onClick={this.onClose}>&#xe653;</i>我的好友</Link>
                            <Link to={"/"}><i className="iconfont">&#xe627;</i>听歌识曲</Link>
                            <Link to={"/"}><i className="iconfont">&#xe67a;</i>个性装扮</Link>
                        </div>
                        <div className="list">
                            <div>
                                <li><Link><i className="iconfont">&#xe6ca;</i>演出</Link></li>
                                <li><Link><i className="iconfont">&#xe61b;</i>商城</Link></li>
                                <li><Link><i className="iconfont">&#xe600;</i>附近的人</Link></li>
                                <li><Link><i className="iconfont">&#xe626;</i>口袋铃声</Link></li>
                                <li><Link><i className="iconfont">&#xe626;</i>我的订单</Link></li>
                            </div>
                            <div className="creator">
                                <li><Link><i className="iconfont">&#xe60d;</i>创作者中心</Link></li>
                            </div>
                            <div>
                                <li><Link><i className="iconfont">&#xe611;</i>定时停止播放</Link></li>
                                <li><Link><i className="iconfont">&#xe601;</i>扫一扫</Link></li>
                                <li><Link><i className="iconfont">&#xe606;</i>音乐闹钟</Link></li>
                                <li><Link><i className="iconfont">&#xe718;</i>音乐云盘</Link></li>
                                <li><Link><i className="iconfont">&#xe657;</i>在线听歌免费流量</Link></li>
                                <li><Link><i className="iconfont">&#xe674;</i>游戏推荐</Link></li>
                                <li><Link><i className="iconfont">&#xe609;</i>优惠券</Link></li>
                                <li><Link><i className="iconfont">&#xe70e;</i>青少年模式</Link></li>
                            </div>
                        </div>
                        <div className="bottom">
                            <li><i className="iconfont">&#xe698;</i>夜间模式</li>
                            <li><i className="iconfont">&#xe694;</i>设置</li>
                            <li><i className="iconfont">&#xe607;</i>退出</li>
                        </div>
                    </Router>
                </Drawer>
            </div>
        )
    }
}
export default withRouter(DrawerLeft)