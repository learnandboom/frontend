import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;

// practice

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "./redux/counter/CounterSlice";

// const App = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h1>{count}</h1>
//       <br />
//       <button
//         onClick={() => {
//           dispatch(increment());
//         }}
//       >
//         +
//       </button>
//       <br />
//       <button
//         onClick={() => {
//           dispatch(decrement());
//         }}
//       >
//         -
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./redux/counter/counterSlice";

// const App = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <h1>count is : {count}</h1>
//       <button
//         onClick={() => {
//           dispatch(increment());
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           dispatch(decrement());
//         }}
//       >
//         {" "}
//         -
//       </button>
//     </div>
//   );
// };

// export default App;
