import React from "react";
import "./registeration.css";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

function Signup({ userSignupInformation, setUserSignupInformation, history }) {
  const { dispatch } = useGlobalContext();
  const handleonChange = (e) => {
    const { name, value } = e.target;

    setUserSignupInformation({
      ...userSignupInformation,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, username, password, repeatPassword } = e.target;
    let data = {
      id: Math.random() * 100,
      username: username.value,
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value,
    };
    let updatedData = [];
    updatedData = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : [];

    if (
      updatedData.some((v) => v.email === userSignupInformation.email) ||
      password.value !== repeatPassword.value ||
      password.value < 8
    ) {
      alert("email already exist");
    } else {
      updatedData.push(data);
      localStorage.setItem("user", JSON.stringify(updatedData));

      history.push({
        pathname: `/login`,
      });
      sessionStorage.setItem(
        "loggedAccount",
        JSON.stringify({
          email: userSignupInformation.email,
          username: userSignupInformation.username,
        })
      );
      dispatch({ type: "SET_SUBMITTED" });
    }
  };

  return (
    <div className="registration">
      <form className="registration-form-container" onSubmit={handleSubmit}>
        <h2>Create a new account</h2>
        <label htmlFor="username">
          username
          <input
            className="registretion-input"
            id="1"
            name="username"
            type="text"
            value={userSignupInformation.username}
            onChange={handleonChange}
            placeholder="enter your username"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className="registretion-input"
            id="2"
            name="email"
            type="email"
            value={userSignupInformation.email}
            onChange={handleonChange}
            placeholder="enter your email"
            required
          />
        </label>
        {userSignupInformation.email === "" ? (
          <span style={{ color: "red" }}>please enter your email </span>
        ) : null}
        <label htmlFor="passowrd">
          Password
          <input
            className="registretion-input"
            id="3"
            name="password"
            type="password"
            value={userSignupInformation.password}
            onChange={handleonChange}
            placeholder="enter your password"
            required
          />
        </label>

        {userSignupInformation.password.length < 8 &&
        userSignupInformation.password === "" ? (
          <span style={{ color: "red" }}>Please enter your password</span>
        ) : null}
        <label htmlFor="r.password">
          Reapeat-password
          <input
            className="registretion-input"
            id="4"
            name="repeatPassword"
            type="password"
            value={userSignupInformation.repeatPassword}
            onChange={handleonChange}
            placeholder="confirm password"
            required
          />
        </label>
        {userSignupInformation.repeatPassword !==
        userSignupInformation.password ? (
          <span style={{ color: "red" }}>not match </span>
        ) : null}

        <button type="submit" className="form-btn">
          Sign up
        </button>
        <Link to="/login">Already have an account</Link>
      </form>
    </div>
  );
}

export default withRouter(Signup);
