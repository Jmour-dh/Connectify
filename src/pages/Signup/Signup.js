import React from "react";
import styles from "./Signup.module.scss";
import imgIns from "../../assets/images/inscription.jpg";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className={`${styles.signup} d-flex justify-content-center`}>
      <div className={styles.image}>
        <img src={imgIns} alt="inscription" />
      </div>
      <div className={styles.act}>
        <div className={styles.title}>
          <h2>Inscription</h2>
        </div>
        <div className={`${styles.content} d-flex `}>
          <form action="" className={`${styles.form} p-20`}>
            <div className="mb-10 d-flex flex-row justify-content-between">
              <div className="mb-10 d-flex flex-column ">
                <label htmlFor="name" className={`${styles.input_1} mb-10`}>
                  Nom :
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Entrez votre nom..."
                />
              </div>
              <div className="mb-10 d-flex flex-column">
                <label htmlFor="lName" className={`${styles.input_1} mb-10`}>
                  Prénom :
                </label>
                <input
                  id="lName"
                  type="text"
                  name="lName"
                  placeholder="Entrez votre prénom..."
                />
              </div>
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="email" className="mb-10">
                Email :
              </label>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Entrez votre mail..."
              />
            </div>
            <div className={`${styles.gender} d-flex py-20 `}>
              <label htmlFor="gender">Genre :</label>
              <div className="d-flex mr-20">
                <div>
                  <input
                    className={`${styles.input_3} mr-15 ml-20`}
                    type="radio"
                    value="male"
                    id="male"
                  />
                </div>
                <div>
                  <label htmlFor="male" className="mr-20 ">
                    Homme
                  </label>
                </div>
              </div>
              <div className="d-flex ">
                <div>
                  <input
                    className={`${styles.input_3} mr-15`}
                    type="radio"
                    value="female"
                    id="female"
                  />
                </div>
                <div>
                  <label htmlFor="female" className="mr-20">
                    Femme
                  </label>
                </div>
              </div>
            </div>

            <div className="mb-10 d-flex flex-column">
              <label htmlFor="password">Mot de passe :</label>
              <input
                className={styles.input_2}
                id="password"
                type="password"
                name="password"
                placeholder="Entrez votre mot de passe..."
              />
            </div>
            <div className="mb-10 d-flex flex-column">
              <label htmlFor="confirmPassword" className="mb-10">
                Vérification de mot de passe :
              </label>
              <input
                className={styles.input_2}
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                placeholder="Entrez votre mot de passe..."
              />
            </div>
            <div className="d-flex justify-content-center ">
              <button className="btn btn-secondary m-20">Valider</button>
            </div>
          </form>
        </div>
        <div className="p-30">
          <p>
            Déja Inscrit ?{" "}
            <NavLink className={styles.linkIns} to="/signin">
              Connectez-vous
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
