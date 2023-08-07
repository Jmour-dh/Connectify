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

    // <div className="flex-fill d-flex justify-content-center align-items-center">

    //   <div className={`${styles.profileContainer} card p-20`}>
    //     <h3 className="mb-20">Page de profil</h3>
    //     <ul>
    //       <li>Nom : {user.name}</li>
    //       <li>Email : {user.email} </li>
    //       <li>
    //         Image de profil :
    //         <img src={user.imgProfile} alt={user.name} />
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Info;
