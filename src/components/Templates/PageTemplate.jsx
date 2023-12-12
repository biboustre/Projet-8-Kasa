import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";
import styles from "../../assets/styles/Template.module.css";


const Template = ({
    children                //je ne comprend pas commment cela fonctionne demander explication
}) => {
    return (
        <div className={styles.body}>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Template;