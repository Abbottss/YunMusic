import React from "react";
import {Button,Layout} from 'antd';
import { Row, Col } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	Switch
} from "react-router-dom"
import axios from "axios"
import "./search.css"
export default class Info extends React.Component{
    render(){
        return (
            <div>
                <i className="iconfont" onClick={()=>(this.props.history.push("/singer"))}>&#xe633;</i>
                <i className="iconfont">&#xe65b;</i>
            </div>
         )
    }
    async getInfo(){
        const {data} =await axios.get(`http://49.232.53.60:8080/artist/list?cat=5001`);
        this.setState({
            Entername:data.artists
            
        })
        console.log(data.artists)
    }
    componentWillMount(){
        this.getInfo();
    }
}