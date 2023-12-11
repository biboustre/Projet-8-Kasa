// import { Outlet } from "react-router-dom";
// import Footer from "../pages/Footer.jsx";
// import Header from "../pages/Header.jsx";
import { useState } from "react";
import styles from "./styles/Apropos.module.css";


function Apropos() {
    const [open, setOpen] = useState(false)

    const handlClick = () => {
       setOpen(!open)
    }
 


    return (
        <div className={styles.container} >
            <section className={styles.banniere2}>
                <div className={styles.banniere2_img} ></div>
                <div className={styles.banniere22_img} ></div>
            </section>


            <main>
                <div>
                    <div className={styles.rideauDeroulant}>
                        <p className={styles.categories}>Fiabilité</p>
                        <button onClick={handlClick}>
                            <img src="images/arrow.png" alt="Flêche qui ouvre la déscription" />
                        </button>
                    </div>
                    {open && (<aside   className={styles.textHidden}>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </aside>)}
                    
                </div>
                <div>
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
                </div>
            </main>
        </div>
    )
}


export default Apropos