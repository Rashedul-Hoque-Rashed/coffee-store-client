import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Details from "../Pages/Details/Details";
import Update from "../Pages/Update/Update";
import Error from "../Pages/Error/Error";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/add-coffee",
          element: <AddCoffee/>,
        },
        {
          path: "/coffee/:id",
          element: <Details/>,
          loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
        },
        {
          path: "/update/:id",
          element: <Update/>,
          loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
        }
      ]
    },
  ]);