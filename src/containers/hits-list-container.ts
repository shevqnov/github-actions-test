import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux';
import HitsList, { StateProps, DispatchProps } from '../components/hit-list';
import { fetchHits } from '../store/hit/actions';
import { AppState } from '../store';

const mapStateToProps: MapStateToProps<StateProps, {}, AppState> = (state) => ({
  hits: state.hits.hits,
  loading: state.hits.loading,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch) => ({
  fetchHits: (q: string) => dispatch(fetchHits(q)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HitsList);
