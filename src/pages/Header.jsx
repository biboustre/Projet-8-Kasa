import styles from "./styles/header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div>
          <img src="images/LOGO.png" alt="" />
        </div>
        <nav>
          <Link to="/" className={styles.liens_globale}>
            Accueil
          </Link>
          <Link to="/A Propos" className={styles.liens_globale}>
            A Propos
          </Link>
          {/* <Link to="/orange" className={styles.liens_globale} >orange</Link> */}
        </nav>
      </header>
    </>
  );
}

export default Header;
