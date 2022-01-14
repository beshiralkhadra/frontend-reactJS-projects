import React from "react";
import { withRouter } from "react-router-dom";
import { useGlobalContext } from "../context/context";
const Listingservices = ({ src, title, des, price, history, id }) => {
  const { state, dispatch } = useGlobalContext();
  return (
    <div className="listingservices-container">
      <div className="listingservices-img">
        <img src={src} />
      </div>
      <div className="listingservices-details">
        <div className="listingservices-details-title">{title}</div>
        <div className="listingservices-details-description">{des}</div>
        <div className="listingservices-details-price">{price}JOD</div>
        <button
          onClick={() => {
            {
              state.logged
                ? history.push({ pathname: `/booking/${id}/ ${title}` })
                : history.push({ pathname: `/login` });
            }
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default withRouter(Listingservices);
