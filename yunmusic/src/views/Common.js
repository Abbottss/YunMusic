import React from 'react';
import '../aseets/style/background.css';
import My from "./My";                    //我的
import Discover from "./Discover";        //发现
import YunVillage from "./YunVillage";    //云村
import Video from "./Video";              //视频
import Search from "./Search";            //搜索
import {Button,Layout} from 'antd';
import { Row, Col } from 'antd';
import DrawerLeft from "../components/Drawer"    //个人信息展开栏（抽屉）
import Carousel from "./Discover/Carousel"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
} from "react-router-dom"
const { Header, Footer, Sider, Content } = Layout;

class Common extends React.Component{
    
    render(){
        return (

            <div >
				<Router>
                    <Layout> 
                        <Header>
                            <Row type="flex" justify="space-between">
                                <nav className="App-header">
                                        <Col span={4}><DrawerLeft></DrawerLeft></Col>
                                        <Col span={4}><NavLink to={"/my"} activeStyle={{color:'#fff',fontSize:'0.56rem',position:"relative",top:"-0.02rem"}}>我的</NavLink></Col>
                                        <Col span={4}><NavLink to={"/discover"} activeStyle={{color:'#fff',fontSize:'0.56rem',position:"relative",top:"-0.02rem"}}>发现</NavLink></Col>
                                        <Col span={4}><NavLink to={"/yunvillage"} activeStyle={{color:'#fff',fontSize:'0.56rem',position:"relative",top:"-0.02rem"}}>云村</NavLink></Col>
                                        <Col span={4}><NavLink to={"/video"} activeStyle={{color:'#fff',fontSize:'0.56rem',position:"relative",top:"-0.02rem"}}>视频</NavLink></Col>
                                        <Col span={4}><NavLink to={"/search"} activeStyle={{color:'#fff',fontSize:'0.56rem',position:"relative",top:"-0.02rem"}} onClick={()=>(this.props.history.push("/search"))}><i className="iconfont">&#xe62c;</i></NavLink></Col>
                            
                                </nav>
                            </Row>
                        </Header>
                    </Layout>
                        <Switch>
                            <Route path={"/discover"} component={Discover}></Route>
                            <Route path={"/yunvillage"} component={YunVillage}></Route>
                            <Route path={"/video"} component={Video}></Route>
							<Route path={"/my"} component={My}></Route>
                            <Redirect from="/" to="/discover" />
                        </Switch>
                </Router>
            </div>
        );
    }
}

export default Common;
