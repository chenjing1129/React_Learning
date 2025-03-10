import { Link, Route, Routes, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/dashboard/Profile";
import Setting from "../pages/dashboard/Setting";
import Fans from "../pages/dashboard/profile/Fans";
import Follow from "../pages/dashboard/profile/Follow";
import Login from "../pages/dashboard/Login";
import Book from "../pages/dashboard/Book";
import BlogList from "../components/BlogList";

import NavBar from "../components/NavBar";
import BlogDetails from "../pages/dashboard/BlogDetails";
import UserProvider from "../UserProvider";
const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <UserProvider>
        {location.pathname !== "/login" && <NavBar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:blogIndex" element={<BlogDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />}>
              <Route path="fans" element={<Fans />} />
              <Route path="follow" element={<Follow />} />
            </Route>
            <Route path="setting" element={<Setting />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/book/:bookId" element={<Book />} />
        </Routes>
      </UserProvider>
    </>
  );
};

export default AppRoutes;
