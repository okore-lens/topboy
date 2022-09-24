import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hamburgMenu from "../../../assets/images/hamburg.png";
import logo2 from "../../../assets/images/logo2.png";

import "./Navbar.scss";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
      setClick(false);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  const clickHandler = () => {
    console.log(click);
    setClick(!click);
  };
  const navLinks = (
    <ul>
      <li onClick={clickHandler}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={clickHandler}>
        <Link to="/events">Events</Link>
      </li>
      <li onClick={clickHandler}>
        <Link to="/services">Services</Link>
      </li>
      <li onClick={clickHandler}>
        <Link to="/discography">Discography</Link>
      </li>
      <li onClick={clickHandler}>
        <Link to="/merch">Merch</Link>
      </li>
      <li onClick={clickHandler}>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );

  return (
    <div className={`Navbar `}>
      <div className={`container ${navbar ? "active" : ""}`}>
        <div className="left">
          <div className="image">
            <Link to="/">
              <img src={logo2} />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="hamburg" onClick={clickHandler}>
            <img src={hamburgMenu} />
          </div>
          {click && <div className="nav-list">{navLinks}</div>}
          <span className="nav-links">
            <Link to="/">Home</Link>
          </span>
          <span className="nav-links">
            <Link to="/events">Events</Link>
          </span>
          <span className="nav-links">
            <Link to="/services">Services</Link>
          </span>
          <span className="nav-links">
            <Link to="/discography">Discography</Link>
          </span>
          <span className="nav-links">
            <Link to="/merch">Merch</Link>
          </span>
          <span className="nav-links">
            <Link to="/contact">Contact Us</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
