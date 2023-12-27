import { Navigate, useParams } from "react-router-dom";
import styles from "../assets/styles/Locations.module.css";
import data from "../../fichier.json";
import Template from "../components/Templates/PageTemplate";
import Arrow from "../assets/images/arrow.png";
import Btns from "../components/Atoms/Btns";
import { useState } from "react";


function Location () {
    const {id} = useParams();

    const item = data.find((appartement) => appartement.id === id);
    if (item === undefined) {
        return (
            <Navigate to="/404" />
            ) 
    }

    const imagesCarousel = item.pictures;
    const [slide, setSlide] = useState(0);

    const slideSuivant = () => {
        const newImage = (slide + 1) % imagesCarousel.length;
        setSlide(newImage);
    };

    const slidePrecedent = () => {
        const newImage = (slide - 1 + imagesCarousel.length) % imagesCarousel.length;
        setSlide(newImage);
    };

    
    return(
        <Template>
                  
            <main key={item.id} className={styles.container}>
                <section className={styles.banniere}>
                
                        <div className={styles.carousel} >
                            <img src={imagesCarousel[slide]} alt={`slide ${slide + 1}`} />
                        </div>
                    
                    <button onClick={slidePrecedent} className={styles.btnLeft}>
                        <img  src={Arrow} alt="" />
                    </button> 
                    <button onClick={slideSuivant} className={styles.btnRight}>
                        <img  src={Arrow} alt="" />
                    </button> 
                </section>

                <section className={styles.infosLogements}>
                   <section>
                        <div className={styles.nameAddressLogement}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <h2>{item.location}</h2>
                        </div>
                    
                        <div className={styles.infos}>
                            <div className={styles.childInfos} key={item.index}> <p>{item["tags"]}</p> </div>
                            <div className={styles.childInfos} key={item.index}> <p>{item["tags"]}</p> </div>
                            <div className={styles.childInfos} key={item.index}> <p>{item["tags"]}</p> </div>
                        </div>
                   </section>
                   <section className={styles.infoLogementRight}>
                        <div className={styles.identite}>
                            <div className={styles.nomPrenom}>
                                <h2 className={styles.nom}>{item.host.name}</h2>
                            </div>
                            <img className={styles.imgProfil} src={item.host.picture} alt="" />
                        </div>
                        <div>note</div>
                   </section>
                </section>
                        <section className={styles.btns}>
                            <div className={styles.btn1}>
                                <Btns name="Déscription" text={item.description} />
                            </div>
                            <div className={styles.btn2}>
                                <Btns className={styles.btn22} name="Equipement" text={item.equipments}/>
                            </div>
                        </section>
            </main>
            
        </Template>
    ) 
}


export default Location

