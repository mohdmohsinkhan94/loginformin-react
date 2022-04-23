import React from "react";
import { Link, NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <h1> This is about us page</h1>
      <Link to="/">back to about us page </Link>
      <li>
        <NavLink to="/user/Mohsin">Mohsin</NavLink>
      </li>
      <li>
        <NavLink to="/user/Naved">Naved</NavLink>
      </li>
    </div>
  );
}

export default About;
