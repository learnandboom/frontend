import React from "react";

const card = ({ children, name }) => {
  return (
    <div>
      {children}
      {name}
    </div>
  );
};

export default card;
