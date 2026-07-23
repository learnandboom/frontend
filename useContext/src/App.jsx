import React, { createContext } from "react";
import ChildA from "./component/ChildA";

const userContext = createContext();
const App = () => {
  const user = {
    name: "aman ",
    age: 20,
    status: "good",
  };
  return (
    <div>
      <userContext.Provider value={user}>
        <ChildA />
      </userContext.Provider>
    </div>
  );
};

export default App;
export { userContext };
