import React from "react";
import styles from "./EditLocationItem.module.css";

const EditLocationItem = ({
  newLocationName,
  onChange,
  onUpdate,
  onCancel,
}) => (
  <div className={styles.editContainer}>
    <input
      className={styles.editInput}
      type="text"
      value={newLocationName}
      onChange={onChange}
    />
    <button className={styles.editButton} onClick={onUpdate}>
      Update
    </button>
    <button className={styles.cancelButton} onClick={onCancel}>
      Cancel
    </button>
  </div>
);

export default EditLocationItem;
