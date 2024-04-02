import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import CreateUser from "../crud/CreateUser";
import User from "../crud/User";
import EditUser from "../crud/EditUser";
import NotFound from "../crud/NotFound";
import AllUser from "../crud/AllUser";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import Navbar from "../crud/Navbar";
import PrivateRoute from "../authentication/PrivateRoute";
import Profile from "../crud/Profile";

export const router = createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
        { path:"/createuser", element:<PrivateRoute><CreateUser/></PrivateRoute> },
        { path:"/datauser", element:<PrivateRoute><User/></PrivateRoute> },
        { path:"/edituser/:id", element:<EditUser/> },
        { path:"/alluser", element:<PrivateRoute><AllUser/></PrivateRoute> },
        {path:"/",element:<Register/>},
        {path:"/profile",element:<PrivateRoute><Profile/></PrivateRoute>},
        {path:"/login",element:<Login/>},
        { path:"*", element:<NotFound/> },
    ]
}])