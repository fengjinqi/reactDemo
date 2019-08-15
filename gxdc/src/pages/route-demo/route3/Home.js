import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component{
    render() {
        return(
<div>
                <ul>
                   <li><Link to='/'>mmp</Link></li>
                    <li>    <Link to='/about'>455454</Link></li>
                    <li>    <Link to='/404'>404</Link></li>
                </ul>
    {console.log(this.props)}
    {this.props.children}
</div>
        )
    }
}
