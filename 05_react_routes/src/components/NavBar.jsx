import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../App.css";
import { UserContext } from "../context/UserContext";

const NavBar = () => {
  const location = useLocation();
  const { username, age } = location.state || {};

  const { user } = useContext(UserContext);
  return (
    <div>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about?name=cj&age=21"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/book/456"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          Book
        </NavLink>

        {user ? (
          <div style={{ marginLeft: "auto" }}>
            <span>
              欢迎, {username}, {age}岁
            </span>
          </div>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "active-button" : "inactive-button"
            }
          >
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
