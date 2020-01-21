export type HitType = 'song' | 'album' | 'artist'

export interface Hit {
  highlights: [];
  index: string;
  type: HitType;
  result: {
    id: string;
    full_title: string;
    song_art_image_url: string;
    primary_artist: {
      id: string;
    };
  };
}
