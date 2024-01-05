import styles from "../Footer/Footer.module.css";
import LogoImg from "../../../assets/images/logo-kasa.png"

function Footer () {
    return (
        <>
            <footer>
                <div className={styles.logo_footer}>
                    <img src={LogoImg} alt="" />
                </div>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer