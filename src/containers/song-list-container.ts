import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux';
import SongList, { StateProps, OwnProps, DispatchProps } from '../components/song-list';
import { AppState } from '../store';
import { searchSongsByArtist } from '../store/song/actions';


const mapStateToProps: MapStateToProps<StateProps, OwnProps, AppState> = (state) => ({
  songs: state.songs.list,
  loading: state.songs.loading,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch) => ({
  fetchSongsByArtist: (artistId: number) => dispatch(searchSongsByArtist(artistId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SongList);
