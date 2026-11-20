import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter Application</h2>

      <h1 style={{ color: "green" }}>{count}</h1>
      <p>Current Count</p>

      <button onClick={decrement}>- Decrement</button>

      <button onClick={increment}>+ Increment</button>

      <br /><br />

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
