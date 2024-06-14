import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import Countrydeatils from './Components/Country details/Countrydeatils.jsx'

const router = createBrowserRouter([
  {
    path: "/Rest-countries/",
    element: <App/>,
    children:[
      {
        path: "/Rest-countries/",
        element: <Home/>,
      },
      {
        path: "/Rest-countries/Country",
        element: <Countrydeatils/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
  <RouterProvider router={router} />

  </>
  // </React.StrictMode>,
)
