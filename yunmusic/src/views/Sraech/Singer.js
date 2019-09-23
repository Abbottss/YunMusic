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
import "./singer.css"
import { Tabs } from 'antd';

const { TabPane } = Tabs;
export default class Search extends React.Component{
    constructor(){
        super();
        this.types = [
            { key: "cn_man", name: "华语男" },
            { key: "cn_woman", name: "华语女" },
            { key: "cn_team", name: "华语组合" },
            { key: "k_man", name: "韩国男" },
            { key: "k_woman", name: "韩国女" },
            { key: "k_team", name: "韩国组合" },
            { key: "j_man", name: "日本男" },
            { key: "j_woman", name: "日本女" },
            { key: "j_team", name: "日本组合" },
            { key: "eu_man", name: "欧美男" },
            { key: "eu_woman", name: "欧美女" },
            { key: "eu_team", name: "欧美组合" },
            { key: "other_man", name: "其它男" },
            { key: "other_woman", name: "其它女" },
            { key: "other_team", name: "其它组合" },
          ];
        this.state={
            typeKey: "cn_man",
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
                                <TabPane tab={<span>男</span>}key="1">1</TabPane>
                                <TabPane tab={<span>女</span>}key="2">2</TabPane>
                                <TabPane tab={<span>乐队/组合</span>}key="3">3</TabPane>
                            </Tabs> 
                        </TabPane>
                        <TabPane tab={<span>欧美</span>}key="2">
                            <Tabs>
                                <TabPane tab={<span>男</span>}key="1">4</TabPane>
                                <TabPane tab={<span>女</span>}key="2">5</TabPane>
                                <TabPane tab={<span>乐队/组合</span>}key="3">6</TabPane>
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