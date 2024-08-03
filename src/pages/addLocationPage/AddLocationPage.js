import React from "react";
import AddLocation from "../../components/addLocation/AddLocation";
import styles from "./AddLocationPage.module.css";
import { Link } from "react-router-dom";

const AddLocationPage = ({ addLocation, locations }) => {
  const lastLocation =
    locations.length > 0 ? locations[locations.length - 1] : null;

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.title}>Add Location</h2>
      <div className={styles.formContainer}>
        <AddLocation addLocation={addLocation} />
      </div>
      <div className={styles.containerLastLocation}>
        <h3>Last Location:</h3>
        {lastLocation && (
          <Link
            className={styles.linkLastLocation}
            to={`/weather/${lastLocation}`}
          >
            {lastLocation}
          </Link>
        )}
      </div>
    </div>
  );
};

export default AddLocationPage;
