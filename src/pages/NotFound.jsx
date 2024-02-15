import React from "react";
import Not from "../images/404/NotFound.png";
import "../css/NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound-div">
      <h1 className="sub-head">Oops!</h1>
      <p>We're working on it!</p>
      <img className="not-img" src={Not} />
      <Link to="/">
        <button className="not-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
