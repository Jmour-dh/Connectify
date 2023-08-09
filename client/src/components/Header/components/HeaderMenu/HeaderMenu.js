import React from "react";
import styles from "./HeaderMenu.module.scss";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";
import { useContext } from "react";
import logoIcon from "../../../../assets/icons/favicon.ico";
function HeaderMenu() {
  const { user, signout } = useContext(AuthContext);

  return (
    <>
      {user ? (
        <ul
          className={`${styles.MenuContainer} d-flex flex-column align-items-center card p-20`}
        >
          <li>
            <img className={styles.ico} src={logoIcon} alt="logo" />
          </li>
          <li className="mr-20">
            <NavLink
              className={({ isActive }) => (isActive ? "Linkactive" : "")}
              to="/profile"
            >
              Profil
            </NavLink>
          </li>
          <li className="mr-20">
            <NavLink
              className={({ isActive }) => (isActive ? "Linkactive" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="mr-20">
            <NavLink onClick={() => signout()}>Déconnexion</NavLink>
          </li>
        </ul>
      ) : (
        <ul
          className={`${styles.MenuContainer} d-flex flex-column align-items-center card p-20`}
        >
          <li>
            <img className={styles.ico} src={logoIcon} alt="logo" />
          </li>
          <li className="mr-20">
            <NavLink
              className={({ isActive }) => (isActive ? "Linkactive" : "")}
              end
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li className={`({isActive}) => (isActive ? "Linkactive": "") mr-20`}>
            <NavLink to="/signin">Connexion</NavLink>
          </li>
          <li className={`({isActive}) => (isActive ? "Linkactive": "") mr-20`}>
            <NavLink
              to="/signup"
              className={`({isActive}) => (isActive ? "Linkactive": "") `}
            >
              Inscription
            </NavLink>
          </li>
        </ul>
      )}
      
    </>
  );
}

export default HeaderMenu;
