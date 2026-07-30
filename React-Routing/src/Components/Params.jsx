import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Params = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/about");
  };
  const { id } = useParams();
  return (
    <div>
      <button onClick={handleclick}>go to about page</button>
      <h2>params:{id}</h2>
      <p> </p>
    </div>
  );
};

export default Params;
