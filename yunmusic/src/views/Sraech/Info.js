import React from "react";
import {Button,Layout} from 'antd';
import { Row, Col } from 'antd';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	Switch
} from "react-router-dom"
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
}