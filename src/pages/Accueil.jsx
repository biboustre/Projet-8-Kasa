import { Link } from "react-router-dom";
import styles from "../assets/styles/Accueil.module.css";
import Template from "../components/Templates/PageTemplate";
import Banner from "../components/Molecules/Banner";
import BannerImg from "../assets/images/IMG.jpg";
import data from "../../fichier.json";

function Accueil() {
  return (
    <Template>
      <Banner src={BannerImg} alt="" slogan="Chez vous, partout et ailleurs" />

      <main className={styles.mainAccueil}>
        <section className={styles.gallery}>
          {data.map((item) => (
            <div key={item.identifiant} className={styles.location}>
              <Link to={`/appartement/${item.title}`}>
                <img src={item.cover} alt="" />
              </Link>
            </div>
          ))}
        </section>
      </main>
    </Template>
  );
}

export default Accueil;
