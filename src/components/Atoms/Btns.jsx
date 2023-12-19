import ArrowImg from "../../assets/images/arrow.png";
import styles from "../../assets/styles/Btns.module.css";
import { useState } from "react";





function Btns({name, text}) {
    const [open, setOpen] = useState(false)

    const handlClick = () => {
       setOpen(!open)
    }

    return (
        
             <>
                <div  className={styles.rideauDeroulant}>
                    <p className={styles.categories}>{name}</p>
                    <button onClick={handlClick}>
                        <img className={styles.arrow} src={ArrowImg} alt="Flêche qui ouvre la déscription" />
                    </button>
                </div>
                {open && (<aside   className={styles.textHidden}>
                    <p>{text}</p>
                </aside>)}
            </>

                )}

export default Btns