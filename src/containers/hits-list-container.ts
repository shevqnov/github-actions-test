import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux';
import HitsList, { StateProps, DispatchProps } from '../components/hit-list';
import { State, fetchHits } from '../store';


const mapStateToProps: MapStateToProps<StateProps, {}, State> = (state) => ({
  hits: state.hits,
  loading: state.loading,
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = (dispatch) => ({
  fetchHits: (q: string) => dispatch(fetchHits(q)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HitsList);
