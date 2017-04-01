import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import profile_jeff from '../assets/profile_jeff.jpg';
import React, { Component } from 'react';
import Card from './Card';
import Navbar from './NavBar';
import './App.css';

const posts = [
  {
    name: 'Jeff',
    profilePic: profile_jeff,
    location: 'Vancouver',
    content: 'This is my first post!',
    image: img1
  },
  {
    name: 'Jeff',
    profilePic: profile_jeff,
    location: 'Cypress Falls Park',
    content: 'I live in a beautiful area!',
    image: img2
  },
  {
    name: 'Jeff',
    profilePic: profile_jeff,
    content: 'This is an image of a cat.',
    image: img3
  }
];

export default class Body extends Component {
  render() {
    return (
      <div className='body'>
        <Navbar />
        <div className='container'>
          {posts.map((post, index) => {
            return <Card
              key={index}
              profilePicUrl={post.profilePic}
              username={post.name}
              location={post.location}
              imgUrl={post.image}
              imgAlt='.'
              content={post.content}
            />;
          })}
        </div>
      </div>
    );
  }
}
