import React, { Component } from 'react';
import { Icon } from 'react-fa';
import './App.css'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='title'>
          <span><Icon name='instagram' /></span><h1>React Instagram</h1>
        </div>
        <div className='search'>
            <span><Icon name='search' /></span>
            <span>Search</span>
        </div>
        <div className='nav'>
            <span><Icon name='compass' /></span>
            <span><Icon name='user-o' /></span>
            <span><Icon name='heart-o' /></span>
        </div>
      </div>
    );
  }
}