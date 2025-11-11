import React from 'react';
import { createBrowserRouter } from "react-router";
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Error404 from '../Pages/Error404'; // Import your 404 page
import AllBooks from '../Pages/AllBooks';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "all-books",
        element: <AllBooks/>
      },
      {
        path: "*",       
        element: <Error404 />
      }
    ]
  }
]);

export default Router;
