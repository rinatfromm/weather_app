import React from "react";
import LocationList from "../../components/locationList/LocationList";
import styles from "./LocationListPage.module.css";

const LocationListPage = ({ locations, removeLocation, updateLocation }) => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.title}>Saved Locations</h2>
      <div className={styles.listContainer}>
        <LocationList
          locations={locations}
          removeLocation={removeLocation}
          updateLocation={updateLocation}
        />
      </div>
    </div>
  );
};

export default LocationListPage;
