import React from "react";
import styles from "./Actualite.module.scss";
import imgAc from "../../../../assets/images/actualite.jpg";

function Actualite() {
  return (
    <div className={`${styles.actualite} d-flex`}>
      <div className={styles.image}>
        <img src={imgAc} alt="actualite" />
      </div>
      <div className={styles.act}>
        <div
          className={`${styles.content} d-flex flex-column align-items-center`}
        >
          <div className={styles.title}>
            <h2>Actualité</h2>
          </div>
          <div className={styles.para}>
            <p>
              Le lieu où vous pouvez vous connecter avec vos amis, partager des
              moments spéciaux et explorer de nouvelles rencontres.
            </p>
            <p>
              Exprimez-vous à travers des photos, des vidéos et des messages, et
              découvrez le monde passsionnant de la communanté Connectify
            </p>
            <p>
              Rejoignez-nous dès maintenant et commencez à créer des liens, à
              inspirer et à être inspiré. Connectify est là pour vous aider à
              rester connecté et à célébrer les moments de la vie, ensemble.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actualite;
