import { COUNTER } from '../actions/counter_actions';

const counter = function(state = 0, action) {
  switch (action.type) {
    case COUNTER.INCREMENT:
      return state + 1;
    case COUNTER.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export default counter;
