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
export default class Detail extends React.Component{
    render(){
        return (
            <div>
                <i className="iconfont" onClick={()=>(this.props.history.push("/search"))}>&#xe633;</i>
                
            </div>
         )
    }
    
}