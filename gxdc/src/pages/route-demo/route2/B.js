import React,{Component} from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
export default class B extends Component{
    render() {
        return(
           <div>
               B656 {console.log(this.props.match.params.main)}
               {this.props.match.params.main}
           </div>
        )
    }
}
