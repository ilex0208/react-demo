import React,{Component} from 'react'
import NavLink from './NavLink'

class Main extends Component{
  render() {
    return (
      <div>
        <h1>React Router</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/task">Task</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Main;
