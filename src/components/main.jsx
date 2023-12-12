import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from "../pages/Accueil";
import Apropos from "../pages/Apropos";
import PageError from "../pages/Error";
import Location from "../pages/Locations";

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
