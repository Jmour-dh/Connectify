import React from "react";
import styles from "./Filter.module.scss";
import { NavLink } from "react-router-dom";

function Filter() {
  return (
    <div className={styles.filter}>
      <ul>
        <li>
          <NavLink>ALL</NavLink>
        </li>
        <li>
          <NavLink>Walls</NavLink>
        </li>
        <li>
          <NavLink>Gallery</NavLink>
        </li>
        <li>
          <NavLink>Video</NavLink>
        </li>
        <li>
          <NavLink>Music</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Filter;
