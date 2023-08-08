import React from "react";
import styles from "./Info.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../../context";

function Info() {
  const { user } = useContext(AuthContext);
  return (
    <div
      className={`${styles.imgBack} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.fontProfile} d-flex justify-content-center align-items-center`}
      >
        <ul className={styles.list}>
          <li>
            <img
              className={styles.imgProfile}
              src={user.imgProfile}
              alt="imgProfile"
            />
          </li>
          <li>{user.name}</li>
          <li>{user.lName}</li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
