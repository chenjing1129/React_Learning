import React from "react";

import { NavLink, Outlet, useLocation } from "react-router-dom";

import "../../App.css";

const Dashboard = () => {
  const location = useLocation();
  const { username, age } = location.state || {};

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome: {username}</h3>
      <h3>age: {age}</h3>
      <nav className="navbar">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="setting"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          Setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
