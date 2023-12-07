// import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../pages/Footer.jsx";
import Header from "../pages/Header.jsx";
import styles from "./styles/Apropos.module.css";



// const [categories, setCategories] = useState([
//     { id:1, nom: "Fiabilité" },
//     { id:2, nom: "Reaspect" },
//     { id:3, nom: "Service" },
//     { id:4, nom: "Sécurité" }
// ]) ;




function Apropos() {
    return (
        <>
            <Header />

            <section className={styles.banniere2}>
                <div className={styles.banniere2_img} ></div>
            </section>

            <main>
                {/* <div>
                    {categories.map((categorie) => {
                    return <p key={categorie.id}>{categorie.nom}</p>
                })}
                </div> */}


                <div>
                    <p className={styles.categories}>Fiabilité</p>
                </div>
                <div>
                    <p className={styles.categories}>Reaspect</p>
                </div>
                <div>
                    <p className={styles.categories}>Service</p>
                </div>
                <div>
                    <p className={styles.categories}>Sécurité</p>
                </div>
            </main>

            <Footer />
        </>
    )
}


export default Apropos