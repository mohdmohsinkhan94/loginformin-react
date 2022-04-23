import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const Login = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });

  return (
    <div>
      <h1> This is login page</h1>
      <input type="text" />
      <br />
      <input text="text" />
      <br />
      <button onClick={Login}>Login</button>
    </div>
  );
}

export default Login;
