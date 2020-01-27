import * as React from 'react';
import { Button, List } from '@material-ui/core';
import { Song as SongType } from '../models/song';
import Song from './song';

export interface StateProps {
    songs: SongType[];
    loading: boolean;
}

export interface OwnProps {
    artistId: number;
}

export interface DispatchProps {
    fetchSongsByArtist(artistId: number): void;
}

const SongList: React.FC<StateProps & DispatchProps & OwnProps> = ({
  songs, loading, fetchSongsByArtist, artistId,
}) => {
  const onClick = React.useCallback(() => {
    fetchSongsByArtist(artistId);
  }, []);
  return (
    <>
      <Button onClick={onClick}>Show Artist Songs</Button>
      {loading ? (<p>Loading ...</p>) : (
        <List>
          {songs.map((song) => (
            <Song
              key={song.title}
              title={song.title}
              imageUri={song.song_art_image_thumbnail_url}
            />
          ))}
        </List>
      )}
    </>
  );
};


export default SongList;
