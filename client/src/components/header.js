import React, { useState, useEffect } from "react";
import moment from "moment";
import WeatherApp from "./WeatherApp.js";
import { Link } from "react-router-dom";
import Logo from "../images/CompleteItLogo.png"

import "./styling/headerstyle.css";

function Header() {
  const [currentTime, setCurrentTime] = useState(moment().format("h:mm:ss A"));
  // const currentDate = moment().format("MM/DD/YYYY");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("h:mm:ss A"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header">
      <div className="weather">
        <WeatherApp />
      </div>
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="timeAndDate">
        <div className="time">{currentTime} </div>
        <button className="logout-Btn">
          <Link to={"/"}>logout</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
