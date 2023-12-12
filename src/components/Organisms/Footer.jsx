import styles from "../../assets/styles/Footer.module.css";



function Footer () {
    return (
        <>
            <footer>
                <div className={styles.logo_footer}>
                    <img src="images/LOGOfooter.png" alt="" />
                </div>
                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </>
    )
}

export default Footer