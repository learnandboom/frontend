import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleCLick = () => {
    navigate("/About");
  };
  return (
    <div>
      <p>Home</p> <button onClick={handleCLick}>go to About page</button>
    </div>
  );
};

export default Home;
