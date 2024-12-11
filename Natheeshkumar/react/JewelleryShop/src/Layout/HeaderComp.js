import React from 'react'
import "./ExternalHeader.css"
import CommonData from '../shared/constant/constantData'
import { Outlet } from 'react-router-dom'

const HeaderComp = () => {
    return (
        <div className="header">
            <img src={CommonData.myshoplogo} alt="myshoplogo" />
            <h2>BNK Jewellery</h2>
            <Outlet/>
        </div>
    )
}

export default HeaderComp


// import React from "react";
// import { Outlet } from "react-router-dom";

// const HeaderComp = () => {
//     return (
//         <div>
//             <header>
//                 <h1>Welcome to BNK Jewellery Shop</h1>
//             </header>
//             <Outlet /> {/* Renders HomeComp or AboutComp based on the URL */}
//         </div>
//     );
// };

// export default HeaderComp;