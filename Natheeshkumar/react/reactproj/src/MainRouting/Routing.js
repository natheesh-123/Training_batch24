import {createBrowserRouter} from "react-router-dom";
import Counttask from "../task/Counttask";
import ClassComp from "../components/ClassComp";
import FuncComp from "../components/FuncComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHooksComp from "../Hooks/UseStateHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import PageNotFoundComp from "../Layout/PageNotFoundComp";
import MainDashBoardComp from "../Layout/MainDashBoardComp";
import LoginComp from "../Layout/LoginComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRouting from "./ProtectedRouting";
import MyCarouselComp from "../components/MyCarouselComp";


const routing = createBrowserRouter([
    
    {path:"",element:<LoginComp/>},
    {path:"loginComp",element:<LoginComp/>},
    // {path:"protectedrouting", element:<ProtectedRouting/>},

    // {path:"maindashboard",element:<MainDashBoardComp/>, children:[
     {path:"maindashboard",element:<ProtectedRouting Component={MainDashBoardComp}/>, children:[

        {path:"", element:<Counttask/>},
        {path:"virtualdom", element:<Counttask/>},
        {path:"myfavcolorcomp",element:<MyFavColorComp newcolor="green"/>},
        {path:"productdashcomp",element:<ProductDashComp/>},
{path:"productaddcomp",element:<ProductAddComp/>},
{path:"producteditcomp/:id",element:<ProductEditComp/>},
{path:"mycarouselcomp",element:<MyCarouselComp/>},
        

        {path:"formvalcomp", element:<FormValComp/>},
    // 3.parameterize routing
    {path:"classcomp/:id",element:<ClassComp/>},

    {path:"hooks",element:<ReactHooksComp/>,children:[
        {path:"useeffect",element:<UseEffectHooksComp/>},
        {path:"usestate",element:<UseStateHooksComp/>},
    ]},
    {path:"funccomp",element:<FuncComp/>},

    ]},
    

    // 5.wild card routing
    {path:"*",element:<PageNotFoundComp/>}
    
]);

export default routing;