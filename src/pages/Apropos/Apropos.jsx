import Banner from "../../components/Molecules/Banner/Banner";
import styles from "../Apropos/Apropos.module.css";
import Template from "../../components/Templates/PageTemplate";
import BannerImg from "../../assets/images/IMG-banniere-2.jpg";
import Btns from "../../components/Atoms/Button/Btns";

function Apropos() {
  const categories = [
    {
      id: 1,
      name: "Fiabilité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 2,
      name: "Respect",
      description:
        "La bienvéllence fait partie des valeurs fondatrices de Kasa. Toutes pertubation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      id: 3,
      name: "Service",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      id: 4,
      name: "Sécurité",
      description:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
  ];

  return (
    <Template>
      <Banner src={BannerImg} alt="textAlt" slogan="" />
      <main className={styles.container}>
        {categories.map((item) => (
          <Btns
            className={styles.button}
            key={item.id}
            name={item.name}
            text={item.description}
          />
        ))}
      </main>
    </Template>
  );
}

export default Apropos;


