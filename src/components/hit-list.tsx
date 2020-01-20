import * as React from 'react';
import debounce from 'lodash/debounce';
import { Hit as HitType } from '../models/hit';
import Hit from './hit';

export interface StateProps {
  hits: HitType[];
  loading: boolean;
}

export interface DispatchProps {
  fetchHits(q: string): void;
}


const HitsList: React.FC<StateProps & DispatchProps> = ({ hits, fetchHits, loading }) => {
  const debouncedFetchHits = debounce(fetchHits, 300);
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFetchHits(e.target.value);
  }, []);
  return (
    <>
      <input onChange={onChange} type="text" />
      {loading ? (<p>Loading...</p>) : (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
        >
          {
          hits.map((hit) => (
            <Hit
              artistId="test"
              key={hit.result.id}
              title={hit.result.full_title}
              imageUri={hit.result.song_art_image_url}
            />
          ))
      }
        </div>

      )}
    </>

  );
};

export default HitsList;
