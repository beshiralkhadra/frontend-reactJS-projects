import React from "react";
import "./services.css";
import data99 from "./Data99";
import Listingservices from "./Listingservices";
const Services = (props) => {
  return (
    <div>
      <div
        className="services-backgroung-img"
        style={{
          background: ` rgba(0, 0, 0, 0.7) url("/washing3.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <p>Services</p>
      </div>
      <div className="services-listing-items">
        {data99.map((item, id) => (
          <Listingservices
            key={id}
            src={item.src}
            title={item.title}
            des={item.des}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
