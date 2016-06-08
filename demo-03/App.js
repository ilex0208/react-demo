import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory,IndexRoute } from 'react-router'
import Main from './component/Main'
import Home from './component/Home'
import Task from './component/Task'
import About from './component/About'
import './css/style.css'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="/task" component={Task}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));
