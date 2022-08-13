import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="left">
          <Link to="/">BrandName</Link>
        </div>
        <div className="right">
          <span className="nav-links">
            <Link to="/">Home</Link>
          </span>
          <span className="nav-links">
            <Link to="/services">Services</Link>
          </span>
          <span className="nav-links">
            <Link to="/events">Events</Link>
          </span>
          <span className="nav-links">
            <Link to="/discography">Discography</Link>
          </span>
          <span className="nav-links">
            <Link to="/merch">Merch</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
