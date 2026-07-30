import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Book from "./Book";
import Courses from "./Courses";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <NavLink
        to="Book"
        className={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
      >
        <p>Book</p>
      </NavLink>
      <Link to="Courses">Courses</Link>
      <Link to="Offers">
        <p>Offers</p>
      </Link>
      <Link to="TestPage">
        <p>TestPage</p>
      </Link>
      <Outlet />
      <hr />
    </div>
  );
};

export default Dashboard;
