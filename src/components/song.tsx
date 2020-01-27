import * as React from 'react';
import { ListItem } from '@material-ui/core';

export interface Props {
    title: string;
    imageUri: string;
}

const Song: React.FC<Props> = ({ title, imageUri }) => (
  <ListItem style={{ maxHeight: 90 }}>
    <p>{title}</p>
    <img src={imageUri} alt={title} />
  </ListItem>
);

export default Song;
