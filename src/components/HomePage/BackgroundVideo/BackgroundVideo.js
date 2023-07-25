import React from "react";
import videoMP4 from "../../../assets/videos/video1.mp4";
import styles from "./BackgroundVideo.module.scss";

const BackgroundVideoComponent = () => {
  return (
    <div className={styles.backVideo}>
    <div className={styles.content}>
          <h1>Connectify</h1>
          {/* Ajoutez le reste du contenu souhaité sous la vidéo */}
        </div>
      <video
        playsInline
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={videoMP4} type="video/mp4" />
        {/* Ajoutez des sources supplémentaires pour d'autres formats vidéo, si nécessaire */}
      </video>
    </div>
  );
};

export default BackgroundVideoComponent;
