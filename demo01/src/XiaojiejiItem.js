import React,{Component,Fragment} from 'react'

export default class XiaojiejieItem  extends Component { //cc
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        console.log(this.props.index)
        this.props.deleteItem(this.props.index)
    }
    render() {
        return (
            <Fragment>
                <div onClick={this.handleClick} >{this.props.content}</div>
            </Fragment>

        );
    }
}