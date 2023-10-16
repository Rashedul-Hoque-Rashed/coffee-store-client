import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import Details from "../Pages/Details/Details";
import Update from "../Pages/Update/Update";
import Error from "../Pages/Error/Error";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/Login/Login";
import Users from "../Pages/Users/Users";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffee/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`https://coffee-store-server-khcf7qiid-rashedul-hoques-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) => fetch(`https://coffee-store-server-khcf7qiid-rashedul-hoques-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "sing_up",
        element: <SingUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch('https://coffee-store-server-khcf7qiid-rashedul-hoques-projects.vercel.app/users')
      }
    ]
  },
]);