import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useGlobalContext } from "../context/context";
function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const { state, dispatch } = useGlobalContext();

  return (
    <nav className="navbar">
      <div className="logo-nav">
        <Link to="/">
          <img src="/car-care-logo.png" alt="logo" />
        </Link>
        <button className="burger-menu" onClick={() => setShowNav(!showNav)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <div className="nav-options">
        <ul id={showNav ? "hidden" : null}>
          <li>
            {" "}
            <Link to="/">HOME</Link>
          </li>
          <li>
            {" "}
            <Link to="/aboutus">ABOUT US</Link>
          </li>
          <li>
            {" "}
            <Link to="/services">SERVICES</Link>
          </li>
          <li>{state.logged && <Link to="/profile">PROFILE</Link>}</li>
        </ul>
      </div>

      <div className="register-btn">
        <ul id={showNav ? "hiddenbtn" : null}>
          <li>
            {!state.logged && (
              <Link to="/login">
                <button className="login-btn-header">Login</button>
              </Link>
            )}
          </li>
          <li>
            {state.logged ? (
              <Link to="/login">
                <button
                  className="logout-btn-header"
                  onClick={() => {
                    localStorage.removeItem("loggedUsers");
                    dispatch({ type: "SET_LOGOUT" });
                  }}
                >
                  Logout
                </button>
              </Link>
            ) : null}
          </li>
          <li>
            {!state.logged && (
              <Link to="/signup">
                {" "}
                <button className="signup-btn-header">Signup</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
