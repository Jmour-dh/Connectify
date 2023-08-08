import React from "react";
import styles from "./Profile.module.scss";
import Info from "./components/Info/Info";
import Mur from "./components/Mur/Mur";

function Profile() {
  return (
    <>
      <Info />
      <div className={`${styles.profile} d-flex justify-content-between p-20 `}>
        <div className={styles.murRight}>
          <Mur />
        </div>
      </div>
    </>
  );
}

export default Profile;
