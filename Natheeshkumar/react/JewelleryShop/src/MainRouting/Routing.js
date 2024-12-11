import { createBrowserRouter } from "react-router-dom";
import HeaderComp from "../Layout/HeaderComp";
import AboutComp from "../components/AboutComp";
import HomeComp from "../components/HomeComp";
import BNKJewelleryShop from "../Layout/BNKJewelleryShop";

const routing = createBrowserRouter([

    
        {path:"/",element:<BNKJewelleryShop/>,children:[
                {path:"/",element:<HeaderComp/>},


                // { path: "productdashcomp", element: <ProductDashComp /> },
                // { path: "productaddcomp", element: <ProductAddComp /> },
                // { path: "producteditcomp/:id", element: <ProductEditComp /> },
    
                {path:"/aboutcomp",element:<AboutComp/>},
                {path:"/homecomp",element:<HomeComp/>},


    

          //wild card routing
            // { path: "*", element: <PageNotFoundComp /> }

        ]}
       
    
]);

export default routing;


  
    
