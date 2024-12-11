
// import NavComp from "./NavComp";
// import { Outlet } from "react-router-dom";

// const BNKJewelleryShop = () => {
//     return (
            
//             <div>
//                 <NavComp />
//                 <Outlet /> {/* This renders child components based on the current route */}


//             </div>


//     )
// }
// export default BNKJewelleryShop;

import React from "react";
import { Outlet } from "react-router-dom";
import NavComp from "./NavComp";

const BNKJewelleryShop = () => {
    return (
        <div>
            <NavComp />
            <Outlet /> {/* This renders HeaderComp and its children */}
        </div>
    );
};

export default BNKJewelleryShop;