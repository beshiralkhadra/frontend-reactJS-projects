import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navabar/Navbar";
import Landingpage from "./components/landingpage/Landingpage";
import Footer from "./components/footer/Footer";
import Signup from "./components/registeration/Signup";
import Login from "./components/registeration/Login";
import Aboutus from "./components/aboutUs/Aboutus";
import Services from "./components/services/Services";
import Userprofile from "./components/userprofile/Userprofile";
import Booking from "./components/Bookingform.js/Booking";
import data99 from "./components/services/Data99";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
function App() {
  const [userSignupInformation, setUserSignupInformation] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [userLoginInformation, setUserLoginInformation] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const arrowUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        {isVisible ? (
          <div className="jump">
            <button onClick={arrowUp}>
              <i className="fa-solid fa-arrow-up" />
            </button>
          </div>
        ) : null}
        <ScrollToTop />
        <Navbar />
        <div className="routes-div">
          <Switch>
            <Route exact path="/">
              <Landingpage />
            </Route>
            <Route path="/signup">
              <Signup
                userSignupInformation={userSignupInformation}
                setUserSignupInformation={setUserSignupInformation}
              />
            </Route>
            <Route path="/login">
              <Login
                userLoginInformation={userLoginInformation}
                setUserLoginInformation={setUserLoginInformation}
              />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
            <Route path="/services">
              <Services data99={data99} />
            </Route>
            <Route path="/booking/:id/:title">
              <Booking data99={data99} />
            </Route>
            <Route path="/profile">
              <Userprofile />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
