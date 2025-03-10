import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <nav className="navbar">
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          博客列表
        </NavLink>
      </nav>
    </>
  );
};

export default Home;
