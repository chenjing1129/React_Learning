import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import AppRoutes from "./routes";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">帖子列表</Link>
          </li>
          <li>
            <Link to="/create">新建帖子</Link>
          </li>
          <li>
            <Link to="/films">电影列表</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
