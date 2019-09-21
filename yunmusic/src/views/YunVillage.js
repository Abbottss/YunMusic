import React from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink,
	Switch
} from "react-router-dom"
import axios from "axios"
import "./YunVallage/yun.css"
import { Tabs } from 'antd';

const { TabPane } = Tabs;
export default class YunVallage extends React.Component{
    
    constructor(){
        super()
        this.state={
           arr:{},
           code:""
        }
        
    }
    async change(){
        if(this.state.code===200){
            const {data} =await axios.get(`http://49.232.53.60:8080/hot/topic`);
            this.setState({
                arr:data
            })
            console.log(data)
        }else
            console.log(11111)
    }
    render(){
        return (
            <div>
                <Tabs>
                    <TabPane tab={<span>广场</span>}key="1">广场</TabPane>
                    <TabPane tab={<span>动态</span>}key="2">动态</TabPane>
                </Tabs>
                
            </div>
        )
    }
    async getStatus(){
        const {data} =await axios.get("http://49.232.53.60:8080/login/status")
        this.setState({
            code:data.code
        })
        console.log(data.code)
    }
    componentWillMount(){
       
        this.getStatus();
            this.change();
        
    }
}