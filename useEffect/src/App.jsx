import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
// function App() {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Running...");
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//       console.log("Timer Stopped");
//     };
//   }, []);

//   return <h1>Timer Example</h1>;
// }
// function App() {
//   const [count, setcount] = useState(0);
//   const [name, setName] = useState("");

//   useEffect(() => {
//     console.log("name and count rendered :", name, count);
//   }, [count, name]);
//   return (
//     <div>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button
//         onClick={() => {
//           setcount(count + 1);
//         }}
//       >
//         increase
//       </button>
//     </div>
//   );
// }
// function App  ()  {
//   useEffect(() => {
//     console.log("hello jee");
//     return () => {};
//   }, []);
//   return(
//   <div>
//     <button>click me</button>
//   </div>);
// };

export default App;
