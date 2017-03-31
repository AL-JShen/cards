import React, { Component } from 'react';
import './App.css';

export default class CardContent extends Component {
  render() {
    return (
      <div className='cardContent'>
        {this.props.content}
      </div>
    );
  }
}
