import { combineReducers } from 'redux';
import hits from './hit/reducer';
import songs from './song/reducer';

export default combineReducers({
  hits,
  songs,
});
