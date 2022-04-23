import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <ul className="Navbar">
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "rgreen" };
            }}
            className="nav-bar-link"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "green" };
            }}
            className="nav-bar-link"
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return { color: isActive ? "skyblue" : "green" };
            }}
            className="nav-bar-link"
            to="/contacts"
          >
            contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/filter" className="nav-bar-link">
            Filter
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-bar-link">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Header;
