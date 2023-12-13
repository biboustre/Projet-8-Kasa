import { useParams } from "react-router-dom";
import styles from "../assets/styles/Locations.module.css";
import data from "../../fichier.json";
import Template from "../components/Templates/PageTemplate";
import Arrow from "../assets/images/arrow.png";


function Location () {
    const {id} = useParams();

    return(
        <Template>
            <main className={styles.container}>
                <section className={styles.banniere}>
                    {data.map((slide) =>(
                        <div className={styles.slide} key={slide.identifiant}>
                            <img src={slide["des photos"]} alt="" />
                        </div>
                    ))}
                    <button className={styles.btnLeft}>
                        <img  src={Arrow} alt="" />
                    </button> 
                    <button className={styles.btnRight}>
                        <img  src={Arrow} alt="" />
                    </button> 
                   
                </section>
                <section className={styles.infosLogements}>
                   <section>
                        <div className={styles.nameAddressLogement}>
                            <h1 className={styles.title}> {`${id}`} </h1>
                            <h2>Sous titre</h2>
                        </div>
                    
                        <div className={styles.infos}>
                            <div>Test</div>
                            <div>Test</div>
                            <div>Test</div>
                        </div>
                        <div>
                            <p>Description</p>
                            <button></button>
                        </div>
                   </section>
                   <section>
                        <div className={styles.identite}>
                            <div className={styles.nomPrenom}>
                                <h2 className={styles.prenom}>Cacao</h2>
                                <h2 className={styles.nom}>Cacaocacao</h2>
                            </div>
                            <img className={styles.imgProfil} src="images/IMG.jpg" alt="" />
                        </div>
                        <div></div>
                        <div></div>
                   </section>
                </section>
            </main>
        </Template>
    ) 
}


export default Location

