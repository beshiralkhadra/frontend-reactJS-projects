import React, { useState } from "react";
import "./booking.css";
import { useParams } from "react-router-dom";
import data99 from "../services/Data99";

import Popup from "./Popup";
const Booking = () => {
  let { id, title } = useParams();
  let getLocal = JSON.parse(localStorage.getItem("loggedUsers"));
  const [inputData, setInputData] = useState(getLocal);
  const [test, setTest] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [voucher, setVoucher] = useState(false);
  const [newPrice, setNewPrice] = useState(0);
  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));
  /////////////////////////////////////////////////  handling dates
  let d = new Date();
  let tdate = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getUTCFullYear();
  if (tdate < 10) {
    tdate = "0" + tdate;
  }
  if (month < 10) {
    month = "0" + month;
  }
  let minDate = year + "-" + month + "-" + tdate;

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  //////////////////////////////////////////price
  let price;
  for (let obj of data99) {
    if (obj.id == id) {
      price = obj.price;
    }
  }
  /////////////////////voucher
  const handlingVoucher = () => {
    if (voucher == false) {
      price = price - price * 0.1;
      setNewPrice(price);
      setVoucher(true);
    }
  };

  ///////////////////////////////////////////handling data on submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = {
      id: id,
      title: title,
      ...inputData,
      tel: e.target.tel.value,
      date: e.target.start.value,
      time: e.target.hours.value,
    };
    setSubmitted(!submitted);
    setTest(data);
  };
  return (
    <div className="car-care-form-container ">
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="textsCont">
          <div className="texts" id="texts1">
            <input
              onChange={handleonchange}
              name="username"
              value={inputData[0].username}
              required
              placeholder="First Name"
              type="text"
              id="username"
            />
          </div>
          <div className="texts" id="texts2">
            <input
              value={getLocal[0].email}
              required
              placeholder="Email"
              onChange={() => {
                return null;
              }}
              type="email"
              name="email"
              id="email"
            />
            <input
              type="tel"
              pattern="[0-9]{10}"
              required
              placeholder="Mobile Number"
              name="tel"
              id="tel"
            />
          </div>
        </div>
        <div className="dates">
          <input type="date" name="start" min={minDate} />
          <input required type="time" name="hours" />
        </div>
        <div className="total">
          <p>Total :{voucher == false ? price : newPrice} JOD</p>
          <button className="voucher-btn" onClick={handlingVoucher}>
            Apply Voucher
          </button>
        </div>
        <div className="submit">
          <input type="submit" value="Book Now !" />
        </div>
      </form>
      {submitted && <Popup test={test} setSubmitted={setSubmitted} />}
    </div>
  );
};

export default Booking;
