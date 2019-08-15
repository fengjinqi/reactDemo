import React,{Component} from 'react'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import Main from './main'
import About from "./about";
export default class Home extends Component{
    render() {
        return(
            <HashRouter>

                <ul>
                   <li><Link to='/'>main</Link></li>
                    <li>    <Link to='/about'>about</Link></li>

                </ul>
                <Switch>
                <Route exact  path='/' component={Main}/>
                <Route path='/about' component={About}/>
                </Switch>
            </HashRouter>
        )
    }
}
