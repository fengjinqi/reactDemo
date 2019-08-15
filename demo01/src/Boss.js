import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true
        }
        this.toToggole =this.toToggole.bind(this)
    }
    toToggole(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
    render() {
        return (
            <div>
                <CSSTransition
                    in={this.state.isShow}   //用于判断是否出现的状态
                    timeout={2000}           //动画持续时间
                    classNames="boss-text"   //className值，防止重复
                    unmountOnExit
                >
                    <div>BOSS级人物-孙悟空</div>
                </CSSTransition>
                <div><button onClick={this.toToggole}>召唤Boss</button></div>
            </div>
        );
    }
}

export default Boss;