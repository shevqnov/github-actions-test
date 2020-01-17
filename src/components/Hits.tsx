import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State, fetchHitsThunk } from '../store';

const Hits: React.FC = () => {
  const hits = useSelector((state: State) => state.hits);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchHitsThunk('portishead'));
  }, []);
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'nowrap',
    }}
    >
      {
          hits.map((hit) => (
            <div
              key={hit.result.id}
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
  );
};

export default Hits;
