import { Link } from "react-router-dom";
import styles from "../../pages/Accueil/Accueil.module.css";
import Template from "../../components/Templates/PageTemplate";
import Banner from "../../components/Molecules/Banner/Banner";
import BannerImg from "../../assets/images/IMG.jpg";
import data from "../../../fichier.json";

function Accueil() {

  return (
    <Template>
      <Banner src={BannerImg} alt="" slogan="Chez vous, partout et ailleurs" />

      <main className={styles.mainAccueil}>
        <section className={styles.gallery}>
          {data.map((item) => (
            <div key={item.id} className={styles.location}>
              <Link to={`/appartement/${item.id}`}>
                <img className={styles.imgCover} src={item.cover} alt="" />
                <p>{item.title}</p>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </Template>
  );
}

export default Accueil;



