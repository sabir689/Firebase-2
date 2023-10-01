import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import HeroRegister from './Components/HeroRegister/HeroRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path :"/",
        element: <Home></Home>,
      },
      {
        path :"/login",
        element: <Login></Login>,
      },
      {
        path :"/register",
        element: <Register></Register>,
      },
      {
        path :"/heroRegister",
        element: <HeroRegister></HeroRegister>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
