import React from "react";
import "./userprofile.css";
const Userprofile = () => {
  let getLocal = JSON.parse(localStorage.getItem("loggedUsers"));
  let getOrder = JSON.parse(localStorage.getItem("reservations"));

  return (
    <div className="userprofile">
      <div className="user-data">
        <img src="./abdallah3.jpg" />
        <div className="user-data-name">
          <p>{getLocal[0].username}</p>
        </div>
        <div className="user-data-email">
          <p>{getLocal[0].email} </p>
        </div>
      </div>
      <div className="userprofile-reservation">
        <div className="reservation-title">
          <h3>YOUR RESERVATIONS</h3>
        </div>
        <div className="reservation-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>USERNAME</th>
                <th>SERVICE</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {getOrder.map((item, id) => (
                <tr key={id}>
                  <td data-column="ID">{item.id}</td>
                  <td data-column="USERNAME">{getLocal[0].username}</td>
                  <td data-column="SERVICE">{item.title}</td>
                  <td data-column="TOTAL">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
