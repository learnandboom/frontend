import React from "react";
import Sunflower from "../assets/Sunflower.jpg";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="usercard" style={props.style}>
      <h1 className="heading-usercard"> {props.name}</h1>
      <img className="main-image" src={Sunflower} alt="sunflower" />
      <p className=" component-discription">{props.diss}</p>
    </div>
  );
};

export default UserCard;
