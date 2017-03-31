import React, { Component } from 'react';
import './App.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='title'>
          <h1>React Instagram</h1>
        </div>
        <div className='nav'>
          <ul>
            <a href='#'>Home</a>
            <a href='#'>Profile</a>
            <a href='#'>About</a>
          </ul>
        </div>
      </div>
    );
  }
}