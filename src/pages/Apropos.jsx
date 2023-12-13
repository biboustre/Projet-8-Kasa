import Banner from "../components/Molecules/Banner";
import { useState } from "react";
import styles from "../assets/styles/Apropos.module.css";
import Template from "../components/Templates/PageTemplate";
import BannerImg from "../assets/images/IMG-banniere-2.jpg";
import ArrowImg from "../assets/images/arrow.png";


function Apropos() {
    const [categories, setCategories] = useState([
        { id: 1, name: "Fiabilité", description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."},
        { id: 2, name: "Respect", description: "La bienvéllence fait partie des valeurs fondatrices de Kasa. Toutes pertubation du voisinage entraînera une exclusion de notre plateforme."},
        { id: 3, name: "Service", description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."},
        { id: 4, name: "Sécurité", description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}
    ]);

    const [open, setOpen] = useState(false)

    const handlClick = () => {
       setOpen(!open)
    }
 

    return (
        <Template>
            
            <Banner src={BannerImg} alt="textAlt" slogan="" />
            <main className={styles.container}>
                {categories.map((item) => (
                    <div className={styles.btnsBarre} key={item.id}>

                        <div  className={styles.rideauDeroulant}>
                            <p className={styles.categories}>{item.name}</p>
                            <button onClick={handlClick}>
                                <img className={styles.arrow} src={ArrowImg} alt="Flêche qui ouvre la déscription" />
                            </button>
                        </div>

                        {open && (<aside   className={styles.textHidden}>
                            <p>{item.description}</p>
                        </aside>)} 
                    </div>
                ))}
                

                {/* <div>
                    <div className={styles.rideauDeroulant}>
                        <p className={styles.categories}>Respect</p>
                        <button onClick={handlClick}>
                            <img src="images/arrow.png" alt="Flêche pour ouvrire " />
                        </button>
                    </div>
                    {open && (<aside   className={styles.textHidden} >
                        <p>La bienvéllence fait partie des valeurs fondatrices de Kasa. Toutes pertubation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </aside>)}
                </div>
                <div>
                    <div className={styles.rideauDeroulant}>
                        <p className={styles.categories}>Service</p>
                        <button onClick={handlClick}>
                            <img src="images/arrow.png" alt="Flêche pour ouvrire " />
                        </button>
                    </div>
                    {open && (<aside   className={styles.textHidden} >
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </aside>)}
                </div>
                <div>
                    <div className={styles.rideauDeroulant}>
                        <p className={styles.categories}>Sécurité</p>
                        <button onClick={handlClick}>
                            <img src="images/arrow.png" alt="Flêche pour ouvrire " />
                        </button>
                    </div>
                    
                    {open && (<aside>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </aside>)}
                </div> */}
            </main>
        
        </Template>
        
    )
}


export default Apropos
