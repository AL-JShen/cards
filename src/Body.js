const posts = [
  {
    id: 1,
    name: 'Jeff',
    profilePic: '../assets/profile_jeff.jpg',
    location: 'Vancouver',
    content: 'This is my first post!',
    image: '../assets/img1.png'
  },
  {
    id: 2,
    name: 'Jeff',
    profilePic: '../assets/profile_jeff.jpg',
    location: 'Cypress Falls Park',
    content: 'I live in a beautiful area!',
    image: '../assets/img2.jpg'
  },
  {
    id: 3,
    name: 'Jeff',
    profilePic: '../assets/profile_jeff.jpg',
    content: 'This is an image of a cat.',
    image: '../assets/img3.jpg'
  }
];


import React, { Component } from 'react';
import Card from './Card';
import Navbar from './NavBar';
import './App.css';

export default class Body extends Component {
  render() {
    return (
      <div className='body'>
        <Navbar />
        <div className='container'>
          {posts.map((post) => {
            return <Card
              profilePicUrl={post.profilePic}
              profilePicAlt='User Photo'
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
