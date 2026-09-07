import React, { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  function increse() {
    setcount(count + 1);
  }
  return (
    <>
      <div>{count}</div>
      <button onClick={increse}>increse</button>
    </>
  );
};

export default App;
