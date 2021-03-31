import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="button" to="/">
          Home
        </Link>
        <Link className="button" to="/images">
          Images
        </Link>
      </nav>
    );
  }
}

export default Nav;
