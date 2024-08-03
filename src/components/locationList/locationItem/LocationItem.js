import React from "react";
import { Link } from "react-router-dom";
import styles from "./LocationItem.module.css";

const LocationItem = ({ location, onEdit, onRemove }) => (
  <div className={styles.containerItems}>
    <Link className={styles.link} to={`/weather/${location}`}>
      {location}
    </Link>
    <button
      className={`${styles.button} ${styles.buttonRemove}`}
      onClick={onRemove}
    >
      Remove
    </button>
    <button
      className={`${styles.button} ${styles.buttonEdit}`}
      onClick={onEdit}
    >
      Edit
    </button>
  </div>
);

export default LocationItem;
