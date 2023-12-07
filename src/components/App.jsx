// import { useState } from 'react'
// import styles from "../components/App.module.css";
import Accueil from "../pages/Accueil.jsx";
import Apropos from "../pages/Apropos.jsx";
import PageError from "../pages/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Accueil />,
    errorElement: <PageError />,
  },
  {
    path: "/A Propos",
    element: <Apropos />,
    // errorElement : <PageError />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Accueil /> */}
    </>
  );
}

export default App;
