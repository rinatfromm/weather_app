import { useState, useEffect } from "react";

const useLocations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const savedLocations = JSON.parse(localStorage.getItem("locations")) || [];
    setLocations(savedLocations);
  }, []);

  const addLocation = (location) => {
    const updatedLocations = [...locations, location];
    setLocations(updatedLocations);
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
  };

  const removeLocation = (location) => {
    const updatedLocations = locations.filter((loc) => loc !== location);
    setLocations(updatedLocations);
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
  };

  const updateLocation = (index, newName) => {
    const updatedLocations = [...locations];
    updatedLocations[index] = newName;
    setLocations(updatedLocations);
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
  };

  return {
    locations,
    addLocation,
    removeLocation,
    updateLocation,
  };
};

export default useLocations;
