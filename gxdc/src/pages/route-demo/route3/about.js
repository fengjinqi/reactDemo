import React,{Component} from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'
export default class About extends Component{
    render() {
        return(
           <div>
               about
               <Link to='/about/b'>嵌套</Link>
               {this.props.children}
           </div>
        )
    }
}
