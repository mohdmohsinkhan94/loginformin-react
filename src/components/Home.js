import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigatePage = (url) => {
    navigate(url);
  };
  return (
    <div>
      <h1>This is home page </h1>
      <Link to="/about">Back to about page</Link>
      <br />
      <button onClick={() => navigatePage("/about")}>Back to about page</button>
      <br />
      <button onClick={() => navigatePage("/filter")}>
        {" "}
        Back to filter page{" "}
      </button>
    </div>
  );
}

export default Home;
