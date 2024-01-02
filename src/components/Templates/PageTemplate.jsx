import Footer from "../Organisms/Footer/Footer";
import Header from "../Organisms/Header/Header";
import styles from "../Templates/Template.module.css";


const Template = ({
    children                //je ne comprend pas commment cela fonctionne demander explication
}) => {
    return (
        <div className={styles.body}>
            <Header />
            <main className="mainTemplate">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Template;