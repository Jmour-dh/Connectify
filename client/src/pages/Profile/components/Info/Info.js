import React, { useContext, useState } from "react";
import styles from "./Info.module.scss";
import { AuthContext } from "../../../../context";

function Info() {
  const { user } = useContext(AuthContext);
  const [currentImgProfile, setCurrentImgProfile] = useState(user.imgProfile);

  const handleImgProfileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        setCurrentImgProfile(e.target.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div
      className={`${styles.imgBack} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${styles.fontProfile} d-flex justify-content-center align-items-center`}
      >
        <ul className={styles.list}>
          <li>
            <label>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleImgProfileChange}
              />
              <img
                className={styles.imgProfile}
                src={currentImgProfile}
                alt="imgProfile"
              />
            </label>
          </li>
          <li>{user.name}</li>
          <li>{user.lName}</li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
