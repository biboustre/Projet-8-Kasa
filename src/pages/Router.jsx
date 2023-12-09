import Accueil from "./Accueil.jsx";
import Header from "./Header.jsx";
import Apropos from "../pages/Apropos.jsx";
import PageError from "../pages/Error.jsx";
import Location from "./locations/Locations.jsx";
import Footer from "./Footer.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

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
        },
        {
         path: "Locations",
         element: <Root2 />,
        },
        {
         path: "locations2",
         element: <Root2 />,
        },
        {
         path: "locations3",
         element: <Root2 />,
        },
        {
         path: "locations4",
         element: <Root2 />,
        },
        {
         path: "locations5",
         element: <Root2 />,
        },
        {
         path: "locations6",
         element: <Root2 />,
        },
        // {
        //  
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

function Root2 () {
  return (
    <>
       <Location />
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