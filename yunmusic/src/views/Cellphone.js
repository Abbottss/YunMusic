import React from "react";
import "../aseets/style/login/cellphone.css";
class Cellphone extends React.Component{
	render(){
		return (
			<div className="container_cell">
				<div className="container_one">
					<i className="iconfont icon-zuo" onClick={()=>(this.props.history.go(-1))}></i><span style={{"fontSize":"34px"}}>手机号登录</span>
				</div>
				<div className="container_two">
					未注册手机号登录后将自动创建账号
				</div>
				<div className="container_end">
					
				</div>
			</div>
		)
	}
}
export default Cellphone;