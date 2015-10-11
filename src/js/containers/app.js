import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/counter_actions';
import Counter from '../components/counter';

const mapStateToProps = function(state) {
  return {
    count: state.counter
  };
}

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
