// import { Outlet } from "react-router-dom";
// import Footer from "../pages/Footer.jsx";
// import Header from "../pages/Header.jsx";
import styles from "./styles/Apropos.module.css";


function Apropos() {
    return (
        <div className={styles.container} >
            {/* <Header /> */}

            <section className={styles.banniere2}>
                <div className={styles.banniere2_img} ></div>
            </section>


            <main>
                <div>
                    <div className={styles.divCategories}>
                        <p className={styles.categories}>Fiabilité</p>
                    <button>
                        <img src="images/arrow.png" alt="Flêche qui ouvre la déscription" />
                    </button>
                    </div>
                    <aside className={styles.textHidden} >
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </aside>
                </div>
                <div>
                    <div className={styles.divCategories}>
                        <p className={styles.categories}>Respect</p>
                        <button>
                            <img src="images/arrow.png" alt="Flêche pour ouvrire " />
                        </button>
                    </div>
                    <aside className={styles.textHidden} >
                        <p>La bienvéllence fait partie des valeurs fondatrices de Kasa. Toutes pertubation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </aside>
                </div>
                <div>
                    <div className={styles.divCategories}>
                        <p className={styles.categories}>Service</p>
                        <button>
                            <img src="images/arrow.png" alt="Flêche pour ouvrire " />
                        </button>
                    </div>
                    <aside className={styles.textHidden} >
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </aside>
                </div>
                <div>
                    <div className={styles.divCategories}>
                        <p className={styles.categories}>Sécurité</p>
                        <button>
                            <img src="images/arrow.png" alt="Flêche pour ouvrire " />
                        </button>
                    </div>
                    
                    <aside className={styles.textHidden} >
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </aside>
                </div>
            </main>

            {/* <Footer /> */}
        </div>
    )
}


export default Apropos