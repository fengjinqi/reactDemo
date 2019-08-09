
import React from 'react';


import './index.css';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onInputChange(e){
        let inputName = e.target.name
        this.setState({
            [inputName]:e.target.value
        })
        console.log(this.state)
    }
    onSubmit(){

    }
    render(){
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-panel">
                    <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="请输入用户名"
                                       onChange={this.onInputChange}
                                   />
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="请输入密码"
                                       onChange={this.onInputChange}
                                   />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"
                                    onClick={this.onSubmit}
                                >登录</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
