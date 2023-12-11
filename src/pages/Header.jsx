// import { useState, useEffect } from "react";
import styles from "./styles/header.module.css";
import { Link } from "react-router-dom";

function Header() {
  // const [checkWidth, setCheckWidth] = useState(window.innerWidth);

  return (
    <>
          {/* {checkWidth < 600 && (
            <nav>
            <Link to="/" className={styles.liens_globale}>
              <p>Accueil</p> <p className={styles.liensHidden}>ACCUEIL</p>
            </Link>
            <Link to="/A Propos" className={styles.liens_globale}>
               <p>A Propos</p> <p className={styles.liensHidden}>A PROPOS</p>
            </Link>
          </nav>
          )} */}
      <header>
        <div>
          <img src="images/LOGO.png" alt="" />
        </div>
        
        <nav>
          <Link to="/" className={styles.liens_globale}>
            <p>Accueil</p> 
          </Link>
          <Link to="/A Propos" className={styles.liens_globale}>
             <p>A Propos</p> 
          </Link>
          <Link to="/" className={styles.liensHidden}>
             <p >ACCUEIL</p>
          </Link>
          <Link to="/A Propos" className={styles.liensHidden}>
              <p >A PROPOS</p>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
