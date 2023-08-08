import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { AuthContext } from "../../context";
import { useContext } from "react";

function Header() {
  const { user, signout } = useContext(AuthContext);

  const location = useLocation();
  const getHeaderClassName = () => {
    if (location.pathname === "/profile") {
      return styles.headerProfile; // Apply different styles for the "Profile" page
    } else {
      return styles.headerDefault; // Apply default styles for other pages
    }
  };
  return (
    <header className={`${getHeaderClassName()} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <span className={styles.logo}>Connectify</span>
      </div>
      {user ? (
        <ul className="d-flex ">
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
          <li className= "mr-20">
            <NavLink onClick={() => signout()}>Déconnexion</NavLink>
          </li>
        </ul>
      ) : (
        <ul className="d-flex ">
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
              className={`({isActive}) => (isActive ? "Linkactive": "") btn btn-primary`}
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
