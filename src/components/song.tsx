import * as React from 'react';

export interface Props {
    title: string;
    imageUri: string;
}

const Song: React.FC<Props> = ({ title, imageUri }) => (
  <div>
    <p>{title}</p>
    <img src={imageUri} alt={title} />
  </div>
);

export default Song;
