import React from "react";
export default class Recommend extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            banner: []
        }
    }
    render(){
        return (
            <div>
                <content>
                    <p>视频</p>
                    <h5>视频名称</h5><span>小图标</span>

                </content>
            </div>
        )
    }
}