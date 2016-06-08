import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Home from './component/Home'
import Task from './component/Task'
import About from './component/About'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/task" component={Task}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
