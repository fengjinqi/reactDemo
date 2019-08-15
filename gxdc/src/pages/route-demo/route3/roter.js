import React,{Component} from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Main from "./../route1/main";
import About from "./../route3/about";
import Home from './Home'
import B from "../route2/B";
import N from './404'
export default class Router extends Component{
    render() {
        return(
            <HashRouter>
                <Home>
                    <Switch>
                    <Route  exact path='/' component={Main} />
                    <Route path='/about' render={()=>
                    {
                        return(
                            <About>


                                <Route  path='/about/:main' component={B} />
                            </About>
                        )
                    }
                    }/>
                        <Route component={N}></Route>
                    </Switch>
                </Home>
            </HashRouter>
        )
    }
}
