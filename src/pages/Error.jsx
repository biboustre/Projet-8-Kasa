import Footer from "../pages/Footer.jsx";
import Header from "../pages/Header.jsx";
import styles from "./styles/Error.module.css";
import { Link } from "react-router-dom";

function PageError() {
  return (
    <div className={styles.leBody}>
      <Header />
      <div className={styles.leMain}>
        <h1>404</h1>
        <p className={styles.textError}>
          Oups! La page que vous demandez nexiste pas.
        </p>
        <Link to="/" className={styles.liens_globale}>
          <p className={styles.textError}>Retouner sur la page d'accueil</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default PageError;
