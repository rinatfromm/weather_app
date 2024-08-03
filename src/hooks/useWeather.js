import { useState, useEffect } from "react";
import { fetchWeather } from "../store/weatherApi";

const useWeather = (location) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(location);
        setWeather(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getWeather();
  }, [location]);

  return { weather, error };
};

export default useWeather;
