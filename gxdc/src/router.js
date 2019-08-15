import React from 'react'
import {HashRouter,Route,Link,Switch} from 'react-router-dom'
import App from "./App";
import Admin from './admin';
import Login from "./pages/login";
import Buttons from "./pages/UI/button";
import NoMatch from "./pages/nomatch";
import Modals from "./pages/UI/modals";
import Loadings from "./pages/UI/loadings";
import Notification from "./pages/UI/notice";
import Messages from "./pages/UI/messages";
import Tabs from "./pages/UI/tabs";
import Gallery from "./pages/UI/gallery";
import Carousel from "./pages/UI/carousel";
import login from "./pages/form/login";
import reg from "./pages/form/register";
import basic from "./pages/table/basicTable";
import highTable from "./pages/table/highTable";
export default class Router extends React.Component{
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/home' render={()=>{
                        return(
                            <Admin>
                                <Switch>
                               <Route exact path='/home/ui/buttons' component={Buttons}/>
                               <Route exact path='/home/ui/modals' component={Modals}/>
                               <Route exact path='/home/ui/loadings' component={Loadings}/>
                               <Route exact path='/home/ui/notification' component={Notification}/>
                               <Route exact path='/home/ui/messages' component={Messages}/>
                               <Route exact path='/home/ui/tabs' component={Tabs}/>
                               <Route exact path='/home/ui/gallery' component={Gallery}/>
                               <Route exact path='/home/ui/carousel' component={Carousel}/>
                               <Route exact path='/home/form/login' component={login}/>
                               <Route exact path='/home/form/reg' component={reg}/>
                               <Route exact path='/home/table/basic' component={basic}/>
                               <Route exact path='/home/table/high' component={highTable}/>
                                <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        )
                    }}/>

                </App>
            </HashRouter>
        )
    }
}
