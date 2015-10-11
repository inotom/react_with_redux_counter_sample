export const COUNTER = {
  INCREMENT: 'COUNTER:INCREMENT',
  DECREMENT: 'COUNTER:DECREMENT'
};

export function increment() {
  return {
    type: COUNTER.INCREMENT
  };
}

export function decrement() {
  return {
    type: COUNTER.DECREMENT
  };
}
