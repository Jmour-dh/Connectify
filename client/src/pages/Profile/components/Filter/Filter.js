import React from "react";
import styles from "./Filter.module.scss";
import { NavLink } from "react-router-dom";

function Filter({ onFilterChange }) {
  return (
    <div className={styles.filter}>
      <ul>
        <li>
          <NavLink onClick={() => onFilterChange("ALL")}>ALL</NavLink>
        </li>
        <li>
          <NavLink onClick={() => onFilterChange("Walls")}>Walls</NavLink>
        </li>
        <li>
          <NavLink onClick={() => onFilterChange("Gallery")}>Gallery</NavLink>
        </li>
        <li>
          <NavLink onClick={() => onFilterChange("Video")}>Video</NavLink>
        </li>
        <li>
          <NavLink onClick={() => onFilterChange("Music")}>Music</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
