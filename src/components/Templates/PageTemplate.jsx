import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";


const Template = ({
    children
}) => {
    return (
        <div>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Template;