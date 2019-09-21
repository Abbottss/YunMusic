import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import axios from "axios"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	Switch
} from "react-router-dom"
import "./search.css";
import { Tabs } from 'antd';

const { TabPane } = Tabs;
export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            List:[],
            SongList:[],
            Entername:[]
        }
    }
    render(){
        return (
            <div className="boxs">
                <Router>
                    <nav className="box">
                        <NavLink to={"/search"} onClick={()=>(this.props.history.push("/search"))}><i className="iconfont">&#xe633;</i></NavLink>
                        <span>歌手分类</span>
                    </nav>
                    <Tabs>
                        <TabPane tab={<span>华语</span>}key="1">
                            <Tabs>
                                <TabPane tab={<span>男</span>}key="1">nan</TabPane>
                                <TabPane tab={<span>女</span>}key="2">nv</TabPane>
                                <TabPane tab={<span>乐队/组合</span>}key="3">ha</TabPane>
                            </Tabs> 
                        </TabPane>
                        <TabPane tab={<span>欧美</span>}key="2">
                            <Tabs>
                                <TabPane tab={<span>男</span>}key="1">nan</TabPane>
                                <TabPane tab={<span>女</span>}key="2">nv</TabPane>
                                <TabPane tab={<span>乐队/组合</span>}key="3">ha</TabPane>
                            </Tabs> 
                        </TabPane>
                        <TabPane tab={<span>日本</span>}key="3">
                            <Tabs>
                                <TabPane tab={<span>男</span>}key="1">nan</TabPane>
                                <TabPane tab={<span>女</span>}key="2">nv</TabPane>
                                <TabPane tab={<span>乐队/组合</span>}key="3">ha</TabPane>
                            </Tabs> 
                        </TabPane>
                        <TabPane tab={<span>韩国</span>}key="4">
                            <Tabs>
                                <TabPane tab={<span>男</span>}key="1">nan</TabPane>
                                <TabPane tab={<span>女</span>}key="2">nv</TabPane>
                                <TabPane tab={<span>乐队/组合</span>}key="3">ha</TabPane>
                            </Tabs> 
                        </TabPane>
                        <TabPane tab={<span>其他</span>}key="5">
                            <Tabs>
                                <TabPane tab={<span>男</span>}key="1">nan</TabPane>
                                <TabPane tab={<span>女</span>}key="2">nv</TabPane>
                                <TabPane tab={<span>乐队/组合</span>}key="3">ha</TabPane>
                            </Tabs> 
                        </TabPane>
                    </Tabs> 
                    <div className="hot-song">
                        <span className="title">热门歌手</span>
                        <div className="listSong">
                                {(this.state.SongList).map((item,i)=>(
                                    (  
                                        <div onClick={()=>(this.props.history.push("/info"))}>
                                            <span className="img"><img className="people" src={item.picUrl} /></span>
                                            <span className="singer">{item.name}</span>
                                            {(this.state.Entername).map((v,j)=>(
                                                <span className="enter"  style={{display:item.id===v.id?"inlineBlock":"none"}}><i className="iconfont">&#xe653;</i></span>
                                            )
                                            )}
                                            <span className="add" onClick={()=>(this.props.history.push("/info"))}>+关注</span>
                                        </div>
                                    )
                                ))}
                        </div>
                    </div>
                    <Switch>
                        <Route path={"/search"} component={Search}></Route>
                    </Switch>
                </Router>
            </div>
         )
    }
    async getSinger(){
        const {data} =await axios.get(`http://49.232.53.60:8080/top/artists`);
        this.setState({
            SongList:data.artists
            
        })
        console.log(data.artists)
    }
    async getEnter(){
        const {data} =await axios.get(`http://49.232.53.60:8080/artist/list?cat=5001`);
        this.setState({
            Entername:data.artists
            
        })
        console.log(data.artists)
    }
    componentWillMount(){
        this.getSinger();
        this.getEnter();
    }
}