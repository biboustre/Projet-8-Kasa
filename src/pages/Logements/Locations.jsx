import { Navigate, useParams } from "react-router-dom";
import styles from "../../pages/Logements/Locations.module.css";
import Template from "../../components/Templates/PageTemplate";
import Arrow from "../../assets/images/arrow.png";
import Btns from "../../components/Atoms/Button/Btns";
import { useState } from "react";
import star from "../../assets/images/VectorGris.png";
import starFull from "../../assets/images/VectorFull.png";
import data from "../../../fichier.json";

function Location() {
  const { id } = useParams();

  const item = data.find((appartement) => appartement.id === id);
  if (item === undefined) {
    return <Navigate to="/404" />;
  }

  const imagesCarousel = item.pictures;
  const [slide, setSlide] = useState(0);

  const slideSuivant = () => {
    const newImage = (slide + 1) % imagesCarousel.length;
    setSlide(newImage);
  };

  const slidePrecedent = () => {
    const newImage =
      (slide - 1 + imagesCarousel.length) % imagesCarousel.length;
    setSlide(newImage);
  };

  const etoile = 5;
  const etoileFull = item.rating;
  const etoiles = [];

  for (let i = 0; i < etoileFull; i++) {
    etoiles.push(
      <li key={i}>
        <img src={starFull} alt="" />
      </li>
    );
  }

  for (let i = etoileFull; i < etoile; i++) {
    etoiles.push(
      <li key={i}  className={styles.etoiles}>
        <img src={star} alt="" />
      </li>
    );
  }

  const nbrPictures = item.pictures.length;

  return (
    <Template>
      <main className={styles.container}>
        <section className={styles.banniere}>
          <div className={styles.carousel}>
            <img src={imagesCarousel[slide]} alt="" />
          </div>
          <p className={styles.nbImg}>
            {slide + 1}/{nbrPictures}
          </p>
          <button onClick={slidePrecedent} className={styles.btnLeft}>
            <img src={Arrow} alt="" />
          </button>
          <button onClick={slideSuivant} className={styles.btnRight}>
            <img src={Arrow} alt="" />
          </button>
        </section>

        <section className={styles.infosLogements}>
          <section>
            <div className={styles.nameAddressLogement}>
              <h1 className={styles.titleLoc}>{item.title}</h1>
              <h2>{item.location}</h2>
            </div>

            <div className={styles.infos}>
              {item.tags.map((tag, index) => (
                <div className={styles.childInfos} key={index}>
                  {" "}
                  <p>{tag}</p>{" "}
                </div>
              ))}
            </div>
          </section>
          <section className={styles.infoLogementRight}>
            <div className={styles.identite}>
              <div className={styles.nomPrenom}>
                <h2 className={styles.nom}>{item.host.name}</h2>
              </div>
              <img
                className={styles.imgProfil}
                src={item.host.picture}
                alt=""
              />
            </div>
            <div className={styles.star}>
              <ul>{etoiles}</ul>
            </div>
          </section>
        </section>
        <section className={styles.btns}>
          <div className={styles.btn1}>
            <Btns name="Déscription" text={item.description} />
          </div>
          <div className={styles.btn2}>
            <Btns
              className={styles.btn22}
              name="Equipement"
              text={item.equipments}
            />
          </div>
        </section>
      </main>
    </Template>
  );
}

export default Location;



