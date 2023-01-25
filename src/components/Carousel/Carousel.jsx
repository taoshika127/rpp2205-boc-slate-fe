import React, { useState } from 'react';
import axios from 'axios'
const Video = (props) => {
  return <video src={props.item.src} />;
}

const Image = (props) => {
  return <img src={props.item.src} />;
}

const Text = (props) => {
  return <p>{props.item.text}</p>;
}

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
  <div class="carousel">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
  </div>
  );
};


export default Carousel;