import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Dashboard");
  };
  return (
    <div>
      <p>About</p>
      <button onClick={handleClick}>go to dashboard</button>
    </div>
  );
};

export default About;
