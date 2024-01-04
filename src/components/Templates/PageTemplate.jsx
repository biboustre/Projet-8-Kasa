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
    children: PropTypes.node // Valide que children est de type 'node', acceptant tous les types d'éléments React
};

export default Template;


// En résumé, ce code définit un composant React  <Template/> qui est la structure de base pour afficher du contenu. 
// Il inclut <Header/>, un contenu principal pouvant varier (children), et un <Footer/>, en utilisant des composants importés et des styles spécifiques
//  pour créer une mise en page réutilisable dans le site.