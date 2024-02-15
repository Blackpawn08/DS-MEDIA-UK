import React ,{useState}from "react";
import { Link, NavLink } from "react-router-dom";
import dsmedia from "../images/nav/logo.png";
import "../css/nav.css";

const Nav = () => {
    const [menuOpen,setMenuOpen]=useState(false)
  return (
    <nav className="navbar">
      <Link to="/" className="logo-div">
        <img className="logo-image" src={dsmedia} alt="Logo" />
      </Link>
      <div className="menu" onClick={()=>{setMenuOpen(!menuOpen);}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="hide" className={menuOpen ? "open" : ""}>
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/works" activeClassName="active">
              Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/pricing" activeClassName="active">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <Link to="/contact" className="nav-link">
          <button className="nav-btn">Book a Call</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
