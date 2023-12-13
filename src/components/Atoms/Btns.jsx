// import ArrowImg from "../../assets/images/arrow.png";
// import styles from "../../assets/styles/Btns.module.css";
// import { useState } from "react";





// function Btns() {
//     const [open, setOpen] = useState(false)

//     const handlClick = () => {
//        setOpen(!open)
//     }

//     return (
//         <div className={styles.btnsBarre} key={item.id}>
//                         {categories.map((item) => (

//                         <div  className={styles.rideauDeroulant}>
//                             <p className={styles.categories}>{item.name}</p>
//                             <button onClick={handlClick}>
//                                 <img src={ArrowImg} alt="Flêche qui ouvre la déscription" />
//                             </button>
//                         </div>

//                         {open && (<aside   className={styles.textHidden}>
//                             <p>{item.description}</p>
//                         </aside>)} 
//                         ))}
//         </div>

//                 )}

// export default Btns