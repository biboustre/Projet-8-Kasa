import styles from "../../Organisms/Header/Header.module.css";
import { Link } from "react-router-dom";

const NavLink = ({link, title}) => {
    return (
        <Link to={link} className={styles.liens_globale}>
            <p>{title}</p> 
        </Link>  
    )
}

export default NavLink;