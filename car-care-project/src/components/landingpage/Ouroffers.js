import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
const Ouroffers = ({ title, price, des }) => {
  return (
    <div className="landingpage-ouroffers-card">
      <div className="ouroffer-card-price">
        <span>{title}</span>
        <span>{price}$</span>
      </div>
      <div className="ouroffer-card-text">{des}</div>
      <div className="ouroffer-card-btn">
        <Link to="/services">
          <button>Explore Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Ouroffers;
