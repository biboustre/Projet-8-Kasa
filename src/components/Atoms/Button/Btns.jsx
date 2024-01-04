import ArrowImg from "../../../assets/images/arrow.png";
import styles from "../../Atoms/Button/Btns.module.css";
import { useState } from "react";
import data from "../../../../fichier.json";


function Btns({name, text}) {
    const [open, setOpen] = useState(false)

    const handlClick = () => {
       setOpen(!open)
    }

    return (
        
            <div className={styles.btncomplet}>
                <div  className={styles.rideauDeroulant}>
                    <p className={styles.categories}>{name}</p>
                    <button onClick={handlClick}>
                        <img className={`${styles.arrow} ${open && styles.arrowOpen}`} src={ArrowImg}  alt="Flêche qui ouvre la déscription" />
                    </button>
                </div>
                {open && (<aside className={styles.textHidden}>
                    <p key={data.id}>{text}</p>
                </aside>)}
            </div>

            )}

export default Btns