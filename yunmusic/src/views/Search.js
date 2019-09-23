import React from "react";
import {Button,Layout} from 'antd';
import { Row, Col } from 'antd';

import axios from "axios"
import Discover from "./Discover"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	Switch
} from "react-router-dom"
import "./Sraech/search.css"
import Singer from "./Sraech/Singer"
import Detail from "./Sraech/Detail"
import { stringify } from "querystring";
export default class Search extends React.Component{
    constructor(props){
        super(props);
        localStorage.searLish = localStorage.searLish || "[]";
        this.state={
            Keyword:"",
            List:[],
            val:"",
            KeyList:[],
            // text:[],
            searList:JSON.parse(localStorage.searLish)
        }
    }
    async change(){
           this.setState({  
                val:this.refs.inp.value,
               
             })
        if(this.refs.inp.value!==""){
            const {data} =await axios.get("http://49.232.53.60:8080/search?keywords="+this.refs.inp.value);
           this.setState({  
                    List:data.result.songs,
             })
        }
        
     }
    render(){
        return (
            <div>
                <Router>
                    <Row type="flex" justify="space-between">
                        <nav className="head">
                            <Col span={2}><NavLink to={"/discover"} onClick={()=>(this.props.history.push("/"))}><i className="iconfont">&#xe633;</i></NavLink></Col>
                            <Col span={18}><input type="text" onChange={this.change.bind(this)} ref="inp"   placeholder={this.state.Keyword} /></Col>
                            
                            <ul className="list" style={{display:this.state.val===""?"none":"inline-block",overflow:"hidden"}}>
                               <li className="top" onClick={()=>{this.btn(this.state.List.name)}}>搜索  "{this.state.val}"</li>
                                {(this.state.List).map((item,i)=>(
                                    (  
                                        <li className="strip" onClick={()=>{this.btn(item.name)}}>
                                        <i className="iconfont">&#xe62c;</i>
                                        {item.name}</li>
                                    )
                                ))}
                                <Detail/>
                            </ul>
                            <Col span={2}><NavLink to={"/singer"} ><i className="iconfont" onClick={()=>(this.props.history.push("/singer"))}>&#xe653;</i></NavLink></Col>

                        </nav>
                                           
                    </Row>
                    <div className="boxes">
                        <div>
                            <span className="search-history">历史记录</span><i className="iconfont" onClick={()=>{this.delete()}}>&#xe63d;</i>
                            <div className=" record">
                                {(this.state.searList).map((item,i)=>(
                                    (
                                        <span className="his">{item}</span>
                                    )
                                ))}
                            </div>
                        </div>                  
                        <span className="hot">热搜榜</span>
                        <div className="listSongs">
                            {(this.state.KeyList).map((item,i)=>(
                                (  
                                    <div onClick={()=>{this.btn(item.searchWord)}}>
                                         <span className="order">{++i}</span>
                                         <div className="ox">
                                            <span className="song">{item.searchWord}</span>
                                            <span className="score">{item.score}</span>
                                            <img className="icon" src={item.iconUrl} />
                                            <p>{item.content}</p>
                                         </div>
                                        
                                    </div>
                                )
                            ))}
                        </div>
                    </div>    
                    <Switch>
                        <Route path={"/discover"} component={Discover}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
    btn(v){
        this.state.searList.unshift(v);
        localStorage.searLish = JSON.stringify(this.state.searList)
        this.setState({
            searList:this.state.searLish
        })

        this.props.history.push("/detail")
    }
    delete(){
        localStorage.removeItem("searLish")
        this.props.history.push("/search")
    }
    async getDefault(){
        const {data} =await axios.get(`http://49.232.53.60:8080/search/default`);
        this.setState({
            Keyword:data.data.showKeyword
        })
    }
    async getList(){
        const {data} =await axios.get(`http://49.232.53.60:8080/search/hot/detail`);
        this.setState({
            KeyList:data.data
        })
        
    }
    
    componentDidMount(){
        
        this.getDefault();
        this.getList();
    }
}