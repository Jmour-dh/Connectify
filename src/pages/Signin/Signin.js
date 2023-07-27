import React from "react";
import styles from "./Signin.module.scss";
import imgCnx from "../../assets/images/connexion.jpg";
import { NavLink } from "react-router-dom";

function Signin() {
  return (
    <div className={`${styles.signin} d-flex justify-content-center`}>
      <div className={styles.image}>
        <img src={imgCnx} alt="connexion" />
      </div>
      <div className={styles.act}>
        <div className={styles.title}>
          <h2>Connexion</h2>
        </div>
        <div className={`${styles.content} d-flex flex-column`}>
          <form action="" className={`${styles.form} d-flex flex-column  p-20`}>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="email" className="mb-10">
                Email :
              </label>
              <input
                type="text"
                name="email"
                placeholder="Entrez votre mail..."
              />
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="password" className="mb-10">
                Mot de passe :
              </label>
              <input
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe..."
              />
            </div>
            <div className="d-flex justify-content-center ">
              <button className="btn btn-secondary m-20">Se Connecter</button>
            </div>
          </form>
        </div>
        <div className="p-30">
          <p>
            Pas de compte ?{" "}
            <NavLink className={styles.linkIns} to="/signup">
              Inscrivez-vous
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
