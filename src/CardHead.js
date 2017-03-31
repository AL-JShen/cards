import React, { Component } from 'react';
import './App.css';

export default class CardHead extends Component {
  render() {
    return (
      <div className='cardHead'>
        <div className='profilePic'>
          <img src={require(this.props.profilePicUrl)} alt={this.props.profilePicAlt} />
        </div>
        <div className='headIntro'>
          <p><strong>{this.props.username}</strong></p>
          <br />
          <p>{this.props.location}</p>
        </div>
      </div>
    );
  }
}
