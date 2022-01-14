import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./landingpage.css";
import data from "./Data";
import data2 from "./Data2";
import data3 from "./Data3";
import Cards from "./Cards";
import Testimonials from "./Testimonials";
import Ouroffers from "./Ouroffers";

const Landingpage = () => {
  return (
    <div>
      {/*///////////////////////////////////////////////////////////// slider  /////////*/}
      <div className="ladingpage-slider">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner  ">
            <div
              className="carousel-item carousel-item-img1 active"
              data-interval="500"
              style={{
                background: ` rgba(0, 0, 0, 0.7) url("/oil.jpg")`,
                backgroundSize: "cover",
              }}
            >
              <div className="ladingpage-slider-container-btn">
                <div className="landingpage-icon">
                  <i className="fas fa-car" />
                </div>
                <p>WE TAKE CARE OF YOUR CAR</p>
                <div>
                  <Link to="/services">
                    <button>Book Now</button>
                  </Link>
                </div>
              </div>
              <div className="image-layer-overlay"></div>
            </div>
            <div
              className="carousel-item carousel-item-img2 "
              data-interval="500"
              style={{
                background: ` rgba(0, 0, 0, 0.7) url("/tire.jpg")`,
                backgroundSize: "cover",
              }}
            >
              <div className="ladingpage-slider-container-btn">
                <div className="landingpage-icon">
                  <i className="fas fa-car" />
                </div>
                <p>Make Your Life Easy</p>
                <div>
                  <Link to="/listingcars">
                    <button>Book Now</button>
                  </Link>
                </div>
              </div>
              <div className="image-layer-overlay"></div>
            </div>
            <div
              className="carousel-item carousel-item-img3 "
              data-interval="500"
              style={{
                background: ` rgba(0, 0, 0, 0.7) url("/wash1.jpg")`,
                backgroundSize: "cover",
              }}
            >
              <div className="ladingpage-slider-container-btn">
                <div className="landingpage-icon">
                  <i className="fas fa-car" />
                </div>
                <p>Make Your Life Easy</p>
                <div>
                  <Link to="/services">
                    <button>Book Now</button>
                  </Link>
                </div>
              </div>
              <div className="image-layer-overlay"></div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////why choose us  */}
      <div className="landingpage-explore">
        <h3>WHY CHOOSE US?</h3>
        <p>
          We are one of the leading auto repair shops serving customers in
          Tucson. All mechanic services are performed by highly qualified
          mechanics.
        </p>
        <div className="landingpage-explore-services">
          {data.map((item, id) => (
            <Cards src={item.src} des={item.des} key={id} title={item.title} />
          ))}
        </div>
        <div className="landingpage-services-btn">
          <Link to="/services">
            <button>READ MORE</button>
          </Link>
        </div>
      </div>
      {/*//////////////////////////////////////////////////////////////// our offers  */}
      <div className="landingpage-ouroffers">
        <h3>OUR OFFERS</h3>
        <div className="landingpage-ouroffers-listing">
          {data3.map((item, id) => (
            <Ouroffers
              key={id}
              title={item.title}
              price={item.price}
              des={item.des}
            />
          ))}
        </div>
      </div>

      {/*///////////////////////////////////////////////////////////// our testimonials  */}
      <div className="landingpage-Testimonials">
        <h3>OUR TESTIMONIALS</h3>
        <div className="landingpage-Testimonials-cards">
          {data2.map((item, id) => (
            <Testimonials
              src={item.src}
              des={item.des}
              key={id}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
