import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="links-container">
        <ul className="links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Users">Users</Link>
            </li>
        </ul>
      </div>
      <div className="nav-toggle"></div>
    </nav>
  );
}

export default Navbar;
