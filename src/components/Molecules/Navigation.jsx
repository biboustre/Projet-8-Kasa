import NavLink from "../Atoms/NavLink";

const Navigation = () => {

    return (
        <nav>
          <NavLink link="/" title="Accueil" />
          <NavLink link="/a-propos" title="A propos" />
        </nav>
    )
}

export default Navigation;