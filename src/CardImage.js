import React, { Component } from 'react';
import './App.css';

export default class CardImage extends Component {
  render() {
    return (
      <div className='cardImage'>
        <img src={this.props.imgUrl} />
      </div>
    );
  }
}
