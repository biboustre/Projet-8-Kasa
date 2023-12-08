import styles from "./styles/Accueil.module.css";
import Header from "../pages/Header.jsx";
import Footer from "../pages/Footer.jsx";
// import {useParams} from "react-router-dom";

function Accueil() {
  return (
    <div className={styles.container} >
      <Header />

      <section className={styles.banniere}>
        <div className={styles.banniere_img}>
          <div className={styles.title_banniere}>
            <p>Chez vous, partout et ailleurs</p>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.gallery}>
          <div className={styles.location}>
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
          <div className={styles.location}>
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
          <div className={styles.location}>
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
          <div className={styles.location}>
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
          <div className={styles.location}>
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
          <div className={styles.location}>
            <a href="#">
              <img src="" alt="" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Accueil;
