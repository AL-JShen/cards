import React, { Component } from 'react';
import './App.css';

export default class CardHead extends Component {
  render() {
    return (
      <div className='cardHead'>
        <div className='profilePic'>
          <img src={this.props.profilePicUrl} />
        </div>
        <div className='headIntro'>
          <p><strong>{this.props.username}</strong>
          <br />
          {this.props.location}</p>
        </div>
      </div>
    );
  }
}
