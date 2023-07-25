import React from "react";
import videoBienv from "../../assets/videos/video1.mp4";
import styles from "./Bienvenue.module.scss"; // Assurez-vous d'avoir le bon chemin d'importation
function Bienvenue() {
  return (
    <>
    <div className={styles.bienvenue}>
    <div className={styles.backVideo}>
    <div className={styles.content}>
          <h2>Bienvenue</h2>
          <p className={styles.comment}>"Harmonisez vos passions, partagez vos émotions avec Connectify !"</p>
        </div>
      <video
        playsInline
        autoPlay
        muted
        loop
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src={videoBienv} type="video/mp4" />
        {/* Ajoutez des sources supplémentaires pour d'autres formats vidéo, si nécessaire */}
      </video>
    </div>
    
    </div>

    </>
  )
}
export default Bienvenue;
