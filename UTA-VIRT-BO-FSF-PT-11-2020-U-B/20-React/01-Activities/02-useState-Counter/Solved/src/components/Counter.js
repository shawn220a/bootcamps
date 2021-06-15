import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <div className="card-body">
        <p className="card-text">Click Count: {count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Increment
        </button>{' '}
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
