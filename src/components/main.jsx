import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from "../pages/Accueil/Accueil";
import Apropos from "../pages/Apropos/Apropos";
import PageError from "../pages/Error/Error";
import Location from "../pages/Logements/Locations";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Accueil />}/>
          <Route  path="/a-propos" element={<Apropos />}/>
          <Route  path="/appartement/:id" element={<Location />}/>
          <Route  path="*" element={<PageError />}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);



// Le code à l'intérieur de render() représente la structure de l'application.
// <React.StrictMode> est utilisé pour activer le mode strict de React, qui aide à détecter les potentielles erreurs dans l'application.
// <BrowserRouter> crée un conteneur pour gérer la navigation en utilisant le HTML5 History API.
// <Routes> est le conteneur principal pour définir différentes routes dans l'application.
// <Route> définit une route spécifique avec des attributs tels que path (le chemin de l'URL) et element (le composant à afficher lorsque cette route est atteinte).
// Voici comment sont définies les routes :

// Route avec exact path="/": Si l'URL est exactement "/" (la page d'accueil), le composant Accueil est rendu.
// Route avec path="/a-propos": Si l'URL correspond à "/a-propos", le composant Apropos est rendu.
// Route avec path="/appartement/:id": Cette route utilise une variable de chemin (:id) pour représenter un identifiant dynamique. Lorsqu'elle est activée avec un ID spécifique, le composant Location est rendu.
// Route avec path="*": C'est une route de secours qui est activée pour toutes les URL qui ne correspondent à aucune des routes définies précédemment. Elle affiche le composant PageError, généralement utilisé pour gérer les pages d'erreur 404.
// Ce code configure les routes de l'application React, indiquant à chaque URL quel composant devrait être rendu.