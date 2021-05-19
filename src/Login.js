import React from "react";
import { NavLink } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 const Login = () => {
    return(
        <>
 <div className="container">
<ul className="nav nav-pills nav-fill">
  <li className="nav-item">
  <NavLink exact to='/singup'>Singup</NavLink>
  </li>
  
  <li className="nav-item">
   <div className="row col-12 d-flex justify-content-center text-warning">
            <span className="h3">OCS</span>
            </div>
  </li>
  <li className="nav-item">
  <NavLink exact to='/Registration'>Registration</NavLink>
  </li>
</ul>
</div>
</>
)
}
export default Login;





   
