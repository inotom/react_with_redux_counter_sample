import React from 'react';

class Counter extends React.Component {
  render() {
    const { count, increment, decrement } = this.props;
    return (
      <div>
        <div>{count}</div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
};

export default Counter;
