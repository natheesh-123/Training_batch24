import React from 'react'
import "./ExternalHeader.css"
import CommonData from '../shared/constant/constantData'


const HeaderComp = () => {
    return (
        <div className="header">
            <img src={CommonData.myshoplogo} alt="myshoplogo" />
            <div>Jewellery</div>
        </div>
    )
}

export default HeaderComp
