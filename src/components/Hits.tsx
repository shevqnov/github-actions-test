import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash/debounce';
import { State, fetchHitsThunk } from '../store';


const Hits: React.FC = () => {
  const dispatch = useDispatch();
  const fetchHits = React.useCallback((q: string) => {
    dispatch(fetchHitsThunk(q));
  }, [dispatch]);
  const debouncedFetchHits = debounce(fetchHits, 300);
  const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedFetchHits(e.target.value);
  }, []);
  const hits = useSelector((state: State) => state.hits);
  return (
    <>
      <input onChange={onChange} type="text" />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
      >
        {
          hits.map((hit) => (
            <div
              key={hit.result.id}
              style={{ width: 250 }}
            >
              <p>{hit.result.full_title}</p>
              <img
                style={{
                  width: 210,
                }}
                src={hit.result.song_art_image_url}
                alt="test"
              />
            </div>
          ))
      }
      </div>
    </>

  );
};

export default Hits;
