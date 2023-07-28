import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { AuthContext } from "../../context";
import { useContext } from "react";

function Header() {
  const { user, signout } = useContext(AuthContext);
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <span className={styles.logo}>Connectify</span>
      </div>
      {user ? (
        <ul className="d-flex ">
          <li className="mr-20">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="profile"
            >
              Profil
            </NavLink>
          </li>
          <li className="mr-20">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="#"
            >
              Contact
            </NavLink>
          </li>
          <li className={`({isActive}) => (isActive ? "active": "") mr-20`}>
            <NavLink onClick={() => signout()}>Déconnexion</NavLink>
          </li>
        </ul>
      ) : (
        <ul className="d-flex ">
          <li className="mr-20">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              end
              to="/"
            >
              Accueil
            </NavLink>
          </li>
          <li className={`({isActive}) => (isActive ? "active": "") mr-20`}>
            <NavLink to="/signin">Connexion</NavLink>
          </li>
          <li className={`({isActive}) => (isActive ? "active": "") mr-20`}>
            <NavLink
              to="/signup"
              className={`({isActive}) => (isActive ? "active": "") btn btn-primary`}
            >
              Inscription
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
}
export default Header;
