import React from "react";
import { useParams } from "react-router-dom";
import useWeather from "../../hooks/useWeather";
import styles from "./WeatherDetails.module.css";

const WeatherDetails = () => {
  const { location } = useParams();
  const { weather, error } = useWeather(location);

  if (error) return <div className={styles.error}>{error}</div>;
  if (!weather) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Weather in {location}</h2>
      <p className={styles.info}>Temperature: {weather.main.temp} °C</p>
      <p className={styles.info}>Weather: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherDetails;
