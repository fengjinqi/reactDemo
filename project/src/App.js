import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './page/home'
import Layout from './components/layout/index'
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Login from "./page/login";
function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/login'component={Login}/>
              <Route path='/' render={(props)=>{
                  return(
                      <Layout>
                          <Switch>
                              <Route exact path="/" component={Home} />
                          </Switch>
                      </Layout>
                      )

              }}/>

          </Switch>
      </Router>

    </div>
  );
}

export default App;
