
import React from "react";
import { Outlet } from "react-router-dom";
import NavComp from "./NavComp";
import HeaderComp from "./HeaderComp";
import MyCarouselComp from "../components/MyCarouselComp";
import ProductsComp from "../components/ProductsComp";

const BNKJewelleryShop = () => {
    return (
        <div>
            <HeaderComp/><br/>
            <NavComp /><br/>
            <MyCarouselComp/><br/>
            <ProductsComp/>
            <Outlet/>

        </div>
    );
};

export default BNKJewelleryShop;