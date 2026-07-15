import React from "react";
import { useState } from "react";

const Card = ({ name, setName, children }) => {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>this is card component : {name}</h1>
      <h2>{children}</h2>
    </div>
  );
};

export default Card;
