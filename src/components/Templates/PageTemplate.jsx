import Footer from "../Organisms/Footer/Footer";
import Header from "../Organisms/Header/Header";
import styles from "../Templates/Template.module.css";
import PropTypes from 'prop-types';


const Template = ({ children }) => {
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

Template.propTypes = {
    children: PropTypes.node 
};

export default Template;


