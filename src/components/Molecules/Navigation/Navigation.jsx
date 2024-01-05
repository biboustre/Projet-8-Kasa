import NavLink from "../../Atoms/NavLink/NavLink";
import { useState } from "react";

const Navigation = () => {

    return (
        <nav>
          <NavLink link="/" title="Accueil" />
          <NavLink link="/a-propos" title="A propos" />
        </nav>
    )
}

export default Navigation;