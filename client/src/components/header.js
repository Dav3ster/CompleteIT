import React, { useState, useEffect } from "react";
import moment from "moment";
import WeatherApp from "./WeatherApp.js";
import { Link } from "react-router-dom";

import "./styling/headerstyle.css";

const styles = {
  logoutBtn:{
    display: 'flex',
    fontSize: '37.5px',
    color: 'white',
    padding: '5px',
    textShadow: '2px 2px 3px black',
    margin: '10px'
  }
}

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
      <div className="logo">CompleteIt Logo</div>
      <div className="timeAndDate">
        <div className="time">{currentTime} </div>
      </div>
      <div>
        <Link to={"/"} style={styles.logoutBtn}>logout</Link>
      </div>
    </header>
  );
}

export default Header;
