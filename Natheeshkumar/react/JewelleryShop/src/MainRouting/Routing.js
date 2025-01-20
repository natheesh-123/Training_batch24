import { createBrowserRouter } from "react-router-dom";
import AddReservationComp from "../CRUD/AddReservationComp";
import EditReservationComp from "../CRUD/EditReservationComp";
import MainDashBoard from "../Layout/MainDashBoard";
import ReservationDashComp from "../CRUD/ReservationDashComp";
// import HeaderComp from "../Layout/HeaderComp";
// import AboutComp from "../components/AboutComp";
// import HomeComp from "../components/HomeComp";
// import BNKJewelleryShop from "../Layout/BNKJewelleryShop";
// import ProductsComp from "../components/ProductsComp";
// import MyCarouselComp from "../components/MyCarouselComp";



const routing = createBrowserRouter([

    /*
        {path:"/",element:<BNKJewelleryShop/>,children:[
                {path:"/",element:<HeaderComp/>},


                // { path: "productdashcomp", element: <ProductDashComp /> },
                // { path: "productaddcomp", element: <ProductAddComp /> },
                // { path: "producteditcomp/:id", element: <ProductEditComp /> },
    
                {path:"/aboutcomp",element:<AboutComp/>},
                {path:"/homecomp",element:<HomeComp/>},
                {path:"/productscomp",element:<ProductsComp/>},
                {path:"/homecomp",element:<HomeComp/>},
                {path:"/mycarouselcomp",element:<MyCarouselComp/>},
                


    

          //wild card routing
            // { path: "*", element: <PageNotFoundComp /> }
/




        ]}     
                */

        {
                // path: "dashboard", element: <MainDashBoard />, children: [
                path: "", element: <MainDashBoard/>, children: [
        
                    // default Routing
                    { path: "", element: <ReservationDashComp /> },
                    { path: "addreservation", element: <AddReservationComp /> },
                    { path: "editreservation/:id", element: <EditReservationComp /> },
                ]        
            }
       
    
]);

export default routing;


  
    
