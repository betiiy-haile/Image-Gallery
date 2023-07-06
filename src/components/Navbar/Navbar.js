import React, { useState } from "react";
import {  Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="logo">
        Image<span>Gallery</span>
      </div>
      <div className="navigation">
        <ul className={showLinks ? "links show-links" : "links"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/images">Images</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <FiMenu className="icon" onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
