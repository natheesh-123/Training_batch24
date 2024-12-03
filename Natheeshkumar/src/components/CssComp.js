import React from "react";
import './external.css';
import mymodule from './mycss.module.css';


const CssComp=()=>{
    let circle={
        width:true?"100px":"200px",
        height:true?"100px":"200px",
        borderRadius:"50%",
        border:false?"2px solid red":"5px solid green",
        margin:"auto"
    }
    return (
        <div>
            {/* 1.use of internal css */}
        <h1 style={{color:'blue',backgroundcolor:"aqua"}}></h1>
        <p style={circle}>hi</p>
        {/* 2.use of external css */}
<div className="txtPrimary">hello natheesh </div>
<div className="txtDanger"> hi ram</div>

        {/* 3.use of modular css */}
<div className={mymodule.special}>hey all</div>
        </div>
    )
}
export default CssComp;
