
import React from "react";
import { Outlet } from "react-router-dom";
import NavComp from "./NavComp";
import HeaderComp from "./HeaderComp";
import MyCarouselComp from "../components/MyCarouselComp";

const BNKJewelleryShop = () => {
    return (
        <div>
            <HeaderComp/><br/>
            <NavComp /><br/>
            <MyCarouselComp/><br/>

            <Outlet/>

        </div>
    );
};

export default BNKJewelleryShop;