import React from "react";
import { Tabs, Radio } from 'antd';
import axios from "axios";
import Mv from "./Video/Mv";
export default class Video extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'top',
            MvList:[]
        };
    }

    handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });

    };

    render() {
        const { TabPane } = Tabs;
        const { mode } = this.state;
        return (
            <div>
                <Tabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
                    {this.state.MvList.map((v,i)=> (
                        <TabPane tab={v.name} key={i}>
                            <Mv id={v.id}></Mv>
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        );
    }
    //视频下的列表
     async getMvList(){
        const {data}= await axios.get(`http://localhost:4000/video/group/list`);
         this.setState({
          MvList:data.data.splice(0,8)
      })
        // console.log(data.data)
    }

    componentDidMount(){
        this.getMvList();
    }
}
