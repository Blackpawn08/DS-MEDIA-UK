import React from "react";
import "../css/footer.css";
import footerlogo from "../images/footer/footerlogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
      <div className="footer-div">
        <div className="footer-div-1">
          <div className="footer-div-1-div-1">
            <img className="footerlogo" src={footerlogo} />
            <p>
              Empowering You
              <br />
              Business, Unleashing
              <br />
              Digital Potential
            </p>
          </div>
          <div className="footer-div-1-div-2">
            <p>GET IN TOUCH</p>
            <p>help@ds-media.co.uk</p>
          </div>
        </div>
        <div className="footer-div-2">
          <div className="footer-div-2-div-1">
            <FaFacebook />
            <FaLinkedin />
            <FaFacebookMessenger />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="footer-div-2-div-2">
            <p>NAVIGATE</p>
            <ul>
              <Link  to="/">HOME</Link>
              <Link  to="/about">ABOUT</Link>
              <Link  to="/services">SERVICES</Link>
              <Link  to="/works">WORKS</Link>
              <Link  to="/pricing">PRICING</Link>
              <Link  to="/contact">CONTACT</Link>
            </ul>
          </div>
        </div>
        <div className="footer-div-3">
            <p>© 2024 DS-MEDIA. All rights reserved.</p>
            <Link>Privacy & Policy</Link>
        </div>
      </div>
    
  );
};

export default Footer;
