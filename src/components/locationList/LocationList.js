import React, { useState } from "react";
import LocationItem from "./locationItem/LocationItem";
import EditLocationItem from "./editLocationItem/EditLocationItem";
import styles from "./LocationList.module.css";

const LocationList = ({ locations, removeLocation, updateLocation }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [newLocationName, setNewLocationName] = useState("");

  const handleEditClick = (index, currentName) => {
    setEditIndex(index);
    setNewLocationName(currentName);
  };

  const handleUpdate = (index) => {
    updateLocation(index, newLocationName);
    setEditIndex(null);
    setNewLocationName("");
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {locations.map((location, index) => (
          <li key={index} className={styles.listItem}>
            {editIndex === index ? (
              <EditLocationItem
                newLocationName={newLocationName}
                onChange={(e) => setNewLocationName(e.target.value)}
                onUpdate={() => handleUpdate(index)}
                onCancel={() => setEditIndex(null)}
              />
            ) : (
              <LocationItem
                location={location}
                onEdit={() => handleEditClick(index, location)}
                onRemove={() => removeLocation(location)}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
