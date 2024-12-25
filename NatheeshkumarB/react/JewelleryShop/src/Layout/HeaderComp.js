import React from 'react'
import "./ExternalHeader.css"
import CommonData from '../shared/constant/constantData'


const HeaderComp = () => {
    return (
        <div className="header">
            <img src={CommonData.myshoplogo} alt="myshoplogo" className='logo' />
            <div className='logotext'>Jewellery</div>
        </div>
    )
}

export default HeaderComp
