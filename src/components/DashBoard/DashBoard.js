import React, { useContext } from "react";
import Authcontext from "../Store/Authcontext/Authcontext";
import "./DashBoard.css";

export const DashBoard = (props) => {
  const ctx = useContext(Authcontext);

  function onLoggedOutHandler() {
    props.UpdatedLoginState(false);
    localStorage.setItem("isLoggedIn", "false");
    ctx.onConfirmation("you have successfully loggedOut");
  }

  return (
    <React.Fragment>
      <p>{ctx.isLoggedIn ? "you have successfully logged In" : " "}</p>
      <div className="main-section">
        <p>Welcome User</p>
        <button onClick={onLoggedOutHandler}>Logout</button>
      </div>
    </React.Fragment>
  );
};

export default DashBoard;
