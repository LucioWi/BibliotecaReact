import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Register from './components/Register.jsx';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // errorElement: <Pagenotfound />, para despues
  },
  {
  path:"/register",
  element:<Register/> 
 
  }
  
 
]);


//El RouterProvider maneja el listado de rutas
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);