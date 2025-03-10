import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* 垂直导航栏 */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          width: "200px",
        }}
      >
        <NavLink
          to="fans"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          我的粉丝
        </NavLink>
        <NavLink
          to="follow"
          className={({ isActive }) =>
            isActive ? "active-button" : "inactive-button"
          }
        >
          我的关注
        </NavLink>
      </nav>

      {/* 内容区域 */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center", // 水平居中
          alignItems: "center", // 垂直居中
          padding: "20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
