import React, { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  let ref = useRef(0);
  let change = useRef(null);
  function Changecolor() {
    change.current.style.backgroundColor = "red";
  }

  function Handlelcick() {
    ref.current = ref.current + 1;

    console.log(ref.current);
    setcount(count + 1);
  }
  return (
    <>
      <button onClick={Handlelcick} ref={change}>
        increase
      </button>
      <h1>{count}</h1>
      <button onClick={Changecolor}>Changecolor</button>
    </>
  );
};

export default App;
