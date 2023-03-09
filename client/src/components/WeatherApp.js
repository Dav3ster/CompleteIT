import React, { useEffect, useState } from "react";
import Weather from "./weather";
import { Dimmer, Loader } from "semantic-ui-react";
import "./styling/weatherStyle.css";

export default function WeatherApp() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${'https://api.openweathermap.org/data/2.5'}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${"9ef862e57db7e32790499a3b83e60359"}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="WeatherApp">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>
          <Dimmer active>
            <Loader>Loading..</Loader>
          </Dimmer>
        </div>
      )}
    </div>
  );
}
