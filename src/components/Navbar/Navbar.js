import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg fixed-top">
    <ul>
      <li className="brand">
        <a href="/">Clicky Game</a>
      </li>
      <li className="">{props.message}</li>
      <li>
        Score: {props.currentScore} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>

);

export default Navbar;
