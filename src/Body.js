import React, { Component } from 'react';
import Card from './Card';
import './App.css';

export default class Body extends Component {
  render() {
    return (
      <div className='body'>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
