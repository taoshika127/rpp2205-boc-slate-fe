import React from "react";
import { useState, useEffect } from "react";
// import { StreamChat } from 'stream-chat';
import axios from "axios";
import { Link } from "react-router-dom";
import Carousel from '../components/Carousel/Carousel.jsx'

export default function Home(props) {
  const items = [
    {
      type: 'video',
      src: 'https://https://www.youtube.com/watch?v=d9CIABENNKQ&ab_channel=AtriocVODs'
    },
    {
      type: 'image',
      src: '../../Test.png'
    },
    {
      type: 'text',
      text: 'This is some sample text'
    },
    {
      type: 'video',
      src: 'https://https://www.youtube.com/watch?v=Mal58Ki4T7I&ab_channel=Atrioc.com/video2.mp4'
    }
  ];


  return(
    <>
      <h1> placeholder for home page... </h1>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Carousel items={items}/>
    </>
  );

}