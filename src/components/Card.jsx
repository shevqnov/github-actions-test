import React from 'react';

const Card = ({ title, text, image }) => (
  <div>
    <h3>{title}</h3>
    <p>{text}</p>
    <img src={image} alt="test" />
  </div>
);


export default Card;
