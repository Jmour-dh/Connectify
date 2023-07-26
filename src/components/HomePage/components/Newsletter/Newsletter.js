import React from "react";
import styles from "./Newsletter.module.scss";
import videoMP4 from "../../../../assets/videos/video1.mp4";

function Newsletter() {
  return (
    <>
      <div className={styles.news}>
        <div className={styles.backVideo}>
          <div className={`${styles.letter}`}>
            <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column align-items-center ">
            <h2>Newsletter</h2>
            <p>Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !</p>
            </div>
            <form action="" className={`${styles.form} d-flex flex-column  p-20`}>
            <div className="mb-10 d-flex flex-column align-items-center">
              <input className={styles.input}
                type="text"
                name="email"
                placeholder="Entrez votre mail..."
              />
            </div>
            <div className="d-flex justify-content-center ">
              <button className="btn btn-valid m-20">Valider</button>
            </div>
            </form>
            </div>
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
      </div>
    </>
  );
}

export default Newsletter;
