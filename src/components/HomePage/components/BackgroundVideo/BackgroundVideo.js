import React from "react";
import videoMP4 from "../../../../assets/videos/video1.mp4";
import styles from "./BackgroundVideo.module.scss"; // Assurez-vous d'avoir le bon chemin d'importation

function BackgroundVideo() {
  return (
    <>
      <div className={styles.backVideo}>
        <div className={styles.content}>
          <h1>Connectify</h1>
        </div>
        <video
          playsInline
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={videoMP4} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default BackgroundVideo;
