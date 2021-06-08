import React from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
    return(
        <nav className="navbar navbar-expand-lg dark bg-dark">
            <div className="row col-12 d-flex justify-content-center text-warning">
            <span className="h3">OCS</span>
            </div>
           <div className="container">
<ul className="nav nav-pills nav-fill">
  <li className="nav-item active">
  <NavLink exact to='/singup'>Singup</NavLink>
  </li>
  
  
  <li className="nav-item active">
  <NavLink exact to='/Registration'>Registration</NavLink>
  </li>
  <li className="nav-item active">
  <NavLink exact to='/Home'>Home</NavLink>
  </li>
</ul>
</div>
        </nav>
    )
}
export default Header;