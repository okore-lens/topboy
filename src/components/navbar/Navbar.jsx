import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <div className={`Navbar `}>
      <div className={`container ${navbar ? "active" : ""}`}>
        <div className="left">
          <Link to="/">TopBoy</Link>
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
