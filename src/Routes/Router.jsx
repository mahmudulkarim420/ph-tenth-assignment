import React from 'react';
import { createBrowserRouter } from "react-router";
import Layouts from '../Layouts/Layouts';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Error404 from '../Pages/Error404'; // Import your 404 page
import AllBooks from '../Pages/AllBooks';
import PrivateRoute from './PrivateRoute';
import AddBook from '../Pages/AddBook';
import MyBooks from '../Pages/MyBooks';
import Profile from '../Pages/Profile';
import EditProfile from '../Pages/EditProfile';

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
        element: 
        <PrivateRoute>
          <AllBooks/>
        </PrivateRoute>
      },
      {
        path: "add-book",
        element: 
        <PrivateRoute>
          <AddBook/>
        </PrivateRoute>
      },
      {
        path: "my-books",
        element: 
        <PrivateRoute>
          <MyBooks/>
        </PrivateRoute>
      },
      {
        path: "profile",
        element: 
        <PrivateRoute>
          <Profile/>
        </PrivateRoute>
      },{
        path: "edit-Profile",
        element: 
        <PrivateRoute>
          <EditProfile/>
        </PrivateRoute>
      },
      {
        path: "*",       
        element: <Error404 />
      }
    ]
  }
]);

export default Router;
