import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

export default class Navigation extends Component {
  render() {
    return (
      <nav className="myNav">
        <ul className="myNavList"> 
          <li>Recipe Book</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Recipe</Link></li>

          
          </ul>
      </nav>
    ); 
  }
}