import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  // `banner ${active ? "active" : ""}`
  return (
    <div className={`Navbar `}>
      <div className={`container ${navbar ? "active" : ""}`}>
        <div className="left">
          <Link to="/">
            TopBoy
            {/* <div className="logo">
              <img src={logo} />
            </div> */}
          </Link>
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
