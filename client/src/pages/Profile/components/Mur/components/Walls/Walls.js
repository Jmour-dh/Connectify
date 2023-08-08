import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./Walls.module.scss"

function Walls() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center ">
      <h2 className="text-align-center pb-20 ">Walls</h2>
        <div className={`${styles.status} mt-10 `}></div>
        <div
          className={`${styles.add} d-flex flex-column justify-content-center `}
        >
          <div className="ml-10 d-flex align-items-center">
            <input type="text" />
            <NavLink>
              <i className="fa-solid fa-circle-down mx-10"></i>
            </NavLink>
            <NavLink>
              <i className="fa-regular fa-paper-plane"></i>
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Walls
