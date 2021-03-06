import React, { Component } from 'react';
import CardHead from './CardHead'
import CardImage from './CardImage'
import CardContent from './CardContent'
import './App.css';

export default class Card extends Component {
  render() {
    return (
      <div className='card'>
        <CardHead {...this.props}/>
        <CardImage {...this.props}/>
        <CardContent {...this.props}/> 
      </div>
    );
  }
}