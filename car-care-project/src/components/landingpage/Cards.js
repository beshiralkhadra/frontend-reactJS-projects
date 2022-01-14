import React from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
const Cards = ({ src, title, des }) => {
  return (
    <div className="about-services-cards">
      <div className="landingpage-card-icon">
        <div className="landingpage-card-icon-font">{src}</div>
      </div>
      <div className="landingpage-card-title">{title}</div>
      <div className="landingpage-card-description">{des}</div>
    </div>
  );
};

export default Cards;
