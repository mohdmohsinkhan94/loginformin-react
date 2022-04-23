import React from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const params = useParams();
  const { name } = params;

  return (
    <div>
      <h1>This is {name} page</h1>
      <Link to="/">back to about us page </Link>
    </div>
  );
}

export default User;
