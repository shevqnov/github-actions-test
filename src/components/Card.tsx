import React from 'react';

interface Props {
  title: string;
  text: string;
  image: string;
}

const Card: React.FC<Props> = ({ title, text, image }) => (
  <div>
    <h3>{title}</h3>
    <p>{text}</p>
    <img src={image} alt="test" />
  </div>
);


export default Card;
