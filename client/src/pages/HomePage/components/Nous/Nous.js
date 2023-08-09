import React from "react";
import styles from "./Nous.module.scss";
import imgQsn from "../../../../assets/images/qsn.jpg";

function Nous() {
  return (
    <div className={`${styles.nous} `}>
      <div className={styles.image}>
        <img src={imgQsn} alt="qui sommes nous" />
      </div>
      <div className={styles.act}>
        <div
          className={`${styles.content} d-flex flex-column align-items-center`}
        >
          <div className={styles.title}>
            <h2>Qui sommes nous ? </h2>
          </div>
          <div className={styles.para}>
            <p>
              Chez Connectify, nous sommes une plateforme sociale
              <br />
              dynamique et inclusive, dédiée à connecter les individus du module
              entier.
            </p>
            <p>
              Notre objectif est de créer un espace numérique où chacun peut se
              sentir libre d'exprimer sa véritable identité, de partager ses
              passions et de tisser des liens authentiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nous;
