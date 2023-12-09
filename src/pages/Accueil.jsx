import { Link, } from "react-router-dom";
import styles from "./styles/Accueil.module.css";
// import Header from "../pages/Header.jsx";
// import Footer from "../pages/Footer.jsx";
// import {useParams} from "react-router-dom";


function Accueil() {
  return (
    <div className={styles.container} >
      {/* <Header /> */}

      <section className={styles.banniere}>
        <div className={styles.banniere_img}>
          <div className={styles.title_banniere}>
            <p>Chez vous, partout et ailleurs</p>
          </div>
        </div>
      </section>

      <main className={styles.mainAccueil}>
        <section className={styles.gallery}>
          <div className={styles.location}>
            <Link to="/locations">
              <img src="images/IMG-banniere-2.jpg" alt="" />
            </Link>
          </div>
          <div className={styles.location}>
            <Link to="/locations2">
              <img src="" alt="" />
            </Link>
          </div>
          <div className={styles.location}>
            <Link to="/locations3">
              <img src="" alt="" />
            </Link>
          </div>
          <div className={styles.location}>
            <Link to="/locations4">
              <img src="" alt="" />
            </Link>
          </div>
          <div className={styles.location}>
            <Link to="/locations5">
              <img src="" alt="" />
            </Link>
          </div>
          <div className={styles.location}>
            <Link to="/locations6">
              <img src="" alt="" />
            </Link>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default Accueil;
