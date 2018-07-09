import React from "react";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-sm navbar-success bg-light">
    <a className="navbar-brand" href="/">
      Memory Game
    </a>
    <ul>
      <li>Status: {props.message}</li>
      <li> Current Score: {props.count} | Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Navbar;