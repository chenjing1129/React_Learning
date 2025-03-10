import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const name = queryParams.get("name");
  const age = queryParams.get("age");
  return (
    <div>
      <h1>About Page</h1>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  );
};

export default About;
