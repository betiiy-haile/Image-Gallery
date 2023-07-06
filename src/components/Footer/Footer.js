import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ante
            id dolor tincidunt suscipit. Donec eget nisl sit amet quam accumsan
            laoreet. 
          </p>
        </div>
        <div className="footer__column">
          <h3>Quick Links</h3>
          <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/images">Explore Images</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/register">Be A Member</Link>
          </div>
        </div>
        <div className="footer__column">
          <h3>Follow Us</h3>
          <div className="footer__social">
            <Link
              className="links"
              to="https://www.facebook.com"
              target="_blank"
            >
              <FaFacebook />
            </Link>
            <Link
              className="links"
              to="https://www.twitter.com"
              target="_blank"
            >
              <FaTwitter />
            </Link>
            <Link
              className="links"
              to="https://www.instagram.com"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </div>
          <p>
            Stay updated with our latest news and promotions by following us on
            social media.
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
