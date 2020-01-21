import * as React from 'react';
import { Song as SongType } from '../models/song';
import Song from './song';

export interface StateProps {
    songs: SongType[];
    loading: boolean;
}

export interface OwnProps {
    artistId: string;
}

export interface DispatchProps {
    fetchSongsByArtist(artistId: string): void;
}

const SongList: React.FC<StateProps & DispatchProps & OwnProps> = ({
  songs, loading, fetchSongsByArtist, artistId,
}) => {
  const onClick = React.useCallback(() => {
    fetchSongsByArtist(artistId);
  }, []);
  return (
    <>
      <button onClick={onClick} type="button">Show Artist Songs</button>
      {loading ? (<p>Loading ...</p>) : (
        <ul>
          {songs.map((song) => (
            <Song
              key={song.title}
              title={song.title}
              imageUri={song.song_art_image_url}
            />
          ))}
        </ul>
      )}
    </>
  );
};


export default SongList;
