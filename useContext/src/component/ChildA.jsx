import React, { useContext } from "react";
import { userContext } from "../App";

const ChildA = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h1> name:{user.name}</h1>
      <h1> age:{user.age}</h1>
      <h1> status:{user.status}</h1>
    </div>
  );
};

export default ChildA;
