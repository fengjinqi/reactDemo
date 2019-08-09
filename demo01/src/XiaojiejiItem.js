import React,{Component,Fragment} from 'react'
import PropTypes  from 'prop-types'

 class XiaojiejieItem  extends Component { //cc
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
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content!==this.props.content){
            return false
        }else{
            return true
        }

    }
 }
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
export default XiaojiejieItem