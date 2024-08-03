import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddLocation.module.css";

const AddLocation = ({ addLocation }) => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLocation(location);
    setLocation("");
    navigate("/locations");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          required
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddLocation;
