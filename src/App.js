import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';


import {
  BrowserRouter as Router,Switch,Route,Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
