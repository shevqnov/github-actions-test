import * as React from 'react';
import SongList from '../containers/song-list-container';

interface Props {
    artistId: number;
    imageUri: string;
    title: string;
}

const Hit: React.FC<Props> = ({ artistId, imageUri, title }) => (
  (
    <div
      style={{ width: 250 }}
    >
      <p>{title}</p>
      <img
        style={{
          width: 210,
        }}
        src={imageUri}
        alt="test"
      />
      <SongList artistId={artistId} />
    </div>
  )
);


export default Hit;
