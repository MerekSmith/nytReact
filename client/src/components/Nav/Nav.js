import React from "react";
import "./Nav.css"

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand navHeaders" href="/">
      <h1>New York Times Article Scrubber</h1>
      <h4>Search for and annotate articles of interest!</h4>
    </a>
  </nav>
);

export default Nav;
