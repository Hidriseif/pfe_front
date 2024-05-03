import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Home from "./views/Home/Home";
import PageNotFound from "./views/PageNotFound";
import Profil from './views/Home/Profile';
import Test from './views/Home/Test';
import Edit from './views/Home/Edit';
import Panier from "./views/Home/Panier";





const router = createBrowserRouter([
   
    
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "*",
      element: <PageNotFound/>
    },
    {
      path: "/Profil",
      element: <Profil/>
    },
    {
      path: "/Test",
      element: <Test/>
    },
    {
      path: "/Edit",
      element: <Edit/>
    },{
      path: "/Panier",
      element: <Panier/>
    },
    
    
    
    
  ])
  
  export default router;