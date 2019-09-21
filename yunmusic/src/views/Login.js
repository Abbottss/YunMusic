import React from "react";
import '../aseets/style/login/login.css';
import logo from '../aseets/style/login/images/logo.gif';
class Login extends React.Component{
    render(){
        return (
		<div className="container">
				<div className="imgs"><img src={logo} alt=""/></div>
				<div className="input1">
					<input type="button" value="手机号登录" onClick={()=>(this.props.history.push("/cellphone"))}/>
				</div>
				<div className="input2">
					<input type="button" value="立即体验"/>
				</div>
				<div className="input3">
					<div><i className="iconfont icon-iconfontzhizuobiaozhunbduan32"></i></div>
					<div><i className="iconfont icon-qqhaoyou"></i></div>
					<div><i className="iconfont icon-weibo"></i></div>
					<div><i className="iconfont icon-yi"></i></div>
				</div>
				<div className="input4">
					<input type="checkbox" />&nbsp;<div>同意<span>《用户协议》</span>和<span>《隐私政策》</span></div>
				</div>
		 </div>
    )
    }
}
export default Login;