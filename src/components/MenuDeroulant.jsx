// import { useState } from "react";


// function buttonDeroulant() {

//     const [open, setOpen] = useState(false)

//     const handlClick = () => {
//        setOpen(!open)
//     }

//     return (
//             <div>
//                 <div className={styles.rideauDeroulant}>
//                     <p className={styles.categories}>Fiabilité</p>
//                     <button onClick={handlClick}>
//                          <img src="images/arrow.png" alt="Flêche qui ouvre la déscription" />
//                     </button>
//                 </div>
//                  {open && (<aside   className={styles.textHidden}>
//                      <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
//                     </aside>)}
//             </div>
        
//     )
// }

// export default buttonDeroulant