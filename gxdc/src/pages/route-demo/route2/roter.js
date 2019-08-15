import React,{Component} from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'
import Main from "./../route1/main";
import About from "./../route1/about";
import Home from './Home'
import B from "../route2/B";
export default class Router extends Component{
    render() {
        return(
            <HashRouter>
                <Home>

                    <Route  exact path='/' component={Main} />
                    <Route path='/about' render={()=>
                    {
                        return(
                            <About>


                                <Route  path='/about/b' component={B} />
                            </About>
                        )
                    }
                    }/>

                </Home>
            </HashRouter>
        )
    }
}
