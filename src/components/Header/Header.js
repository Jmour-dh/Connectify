import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <a href="#" className={styles.logo}>Connectify</a>
      </div>

      <ul className="d-flex ">
        <li className="mr-20">
          <a href="#">Accueil</a>
        </li>
        <li className="mr-20">
          <a href="#">Connexion</a>
        </li>
        <li className="mr-20">
          <a href="#"className="btn btn-primary" >Inscription</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
