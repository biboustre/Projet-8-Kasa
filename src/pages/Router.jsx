import Accueil from "../pages/Accueil.jsx";
import Header from "./Header.jsx";
import Apropos from "../pages/Apropos.jsx";
import PageError from "../pages/Error.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
        {
         path: "/",
         element: <Accueil />,
        },
        {
         path: "A Propos",
         element: <Apropos />,
        }
        // {
        //  path: "Location1",
        //  element: <h1>CACAO</h1>,
        // },
        // {
        //   path: "Location2",
        //   element: <h1>CACAO</h1>,
        // },
        // {
        //   path: "Location3",
        //   element: <h1>CACAO</h1>,
        // },
        // {
        //   path: "Location4",
        //   element: <h1>CACAO</h1>,
        // },
        // {
        //   path: "Location5",
        //   element: <h1>CACAO</h1>,
        // },
        // {
        //   path: "Location6",
        //   element: <h1>CACAO</h1>,
        // },
    ]
  }
]);


function Root () {
    return (
        <>
            <Header />            
            <Outlet />
            <Footer />
        </>
    )
}


function Router() {
    return (
      <>
        <RouterProvider router={router} />
      </>
    )
  }

  export default Router