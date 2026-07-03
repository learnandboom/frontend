import React from "react";
import Sunflower from "../assets/Sunflower.jpg";
import "./UserCard.css";

const UserCard = () => {
  return (
    <div className="usercard">
      <h1 className="heading-usercard"> sunnflower</h1>
      <img className="main-image" src={Sunflower} alt="sunflower" />
      <p className=" component-discription">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, maxime?
      </p>
    </div>
  );
};

export default UserCard;
