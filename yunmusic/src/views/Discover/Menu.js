import React from "react";
import { Row, Col } from 'antd';
import "../../aseets/style/Discover/menu.css";
export default class Menu extends React.Component{
    render(){
        return (
            <div style={{textAlign:"center",padding:"0.34rem 0px 0.4rem"}}>
                 <Row type="flex" justify="space-around">
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"0.73rem",top:"0.34rem"}} className="iconfont">&#xe76d;</i>
                        </div>
                        <span style={{fontSize:"0.3rem",display:"block",paddingTop:"0.14rem",color:"#fff"}}>每日推荐</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"1.5rem"}} className="iconfont">&#xe60f;</i>
                        </div>
                        <span style={{fontSize:"0.3rem",display:"block",paddingTop:"0.14rem",color:"#fff"}}>歌单</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"0.73rem",top:"0.34rem"}} className="iconfont">&#xe618;</i>
                        </div>
                        <span style={{fontSize:"0.3rem",display:"block",paddingTop:"0.14rem",color:"#fff"}}>排行榜</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"1rem",top:"0.24rem",left:"0.015rem"}} className="iconfont">&#xe66b;</i>
                        </div>
                        <span style={{fontSize:"0.3rem",display:"block",paddingTop:"0.14rem",color:"#fff"}}>电台</span>
                    </Col>
                    <Col span={4.2}>
                        <div className="menu-style">
                        <i style={{fontSize:"1.1rem",left:"auto",top:"0.21rem"}} className="iconfont">&#xe6e3;</i>
                        </div>
                        <span style={{fontSize:"0.3rem",display:"block",paddingTop:"0.14rem",color:"#fff"}}>直播</span>
                    </Col>
                </Row>
            </div>
        )
    }
}