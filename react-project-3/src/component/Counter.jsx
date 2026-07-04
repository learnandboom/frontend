import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <p id="para">You Clicked {count} times</p>
      <button
        id="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Counter;
