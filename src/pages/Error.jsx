import styles from "../assets/styles/Error.module.css";
import Template from "../components/Templates/PageTemplate";
import { Link } from "react-router-dom";

function PageError() {
  return (
    <Template>
      <div className={styles.leBody}>
      
      <div className={styles.leMain}>
        <h1>404</h1>
        <p className={styles.textError}>
          Oups! La page que vous demandez nexiste pas.
        </p>
        <Link to="/" className={styles.liens_globale}>
          <p className={styles.textError}>Retouner sur la page d'accueil</p>
        </Link>
      </div>
      </div>
    </Template>
    
  );
}

export default PageError;
