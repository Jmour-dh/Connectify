import React from "react";
import styles from "./Filter.module.scss";
import { NavLink } from "react-router-dom";

function Filter({ onFilterChange }) {
  return (
    <div className={styles.filter}>
      <div className={styles.filterList}>
    <NavLink onClick={() => onFilterChange("ALL")}>ALL</NavLink>
    <NavLink onClick={() => onFilterChange("Walls")}>Walls</NavLink>
    <NavLink onClick={() => onFilterChange("Gallery")}>Gallery</NavLink>
    <NavLink onClick={() => onFilterChange("Video")}>Video</NavLink>
    <NavLink onClick={() => onFilterChange("Music")}>Music</NavLink>
  </div>
    </div>
  );
}

export default Filter;
