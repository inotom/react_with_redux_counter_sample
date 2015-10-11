import counter from '../src/js/reducers/counter';
import { COUNTER } from '../src/js/actions/counter_actions';

describe('Reducers counter', function() {

  it('increment counter', function() {
    let state = counter(0, { type: COUNTER.INCREMENT });
    expect(state).toBe(1);
  });

  it('decrement counter', function() {
    let state = counter(0, { type: COUNTER.DECREMENT });
    expect(state).toBe(-1);
  });

  it('action type is undefined', function() {
    let state = counter(0, { type: undefined });
    expect(state).toBe(0);
  });
});
