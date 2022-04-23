import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contacts() {
  return (
    <div>
      <h1> This is contact us page</h1>
      <p>Here we are learning React js </p>
      <Link to="company">Company</Link>
      <Link to="channals">Channals</Link>
      <Link to="others"> Others</Link>
      <Outlet />
    </div>
  );
}

export default Contacts;
