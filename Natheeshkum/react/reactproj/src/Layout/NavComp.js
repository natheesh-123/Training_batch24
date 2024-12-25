import { Link, useNavigate } from "react-router-dom";
//import LogoutIcon from '@mui/icons-material/Logout';

const NavComp=()=>{

    const nav=useNavigate();
const logout =()=>{
    window.alert("do you want to logout");
    sessionStorage.clear();
    nav("/");
}


    return (

        <div>
            {/* <h2>this is nav component</h2> */}

            <Link to="virtualdom" className="btn btn-primary btm-sm me-4">myvirtual</Link>
            <Link to="funccomp" className="btn btn-primary btm-sm me-4">myfunc</Link>
            <Link to="hooks" className="btn btn-primary btm-sm me-4">hook</Link>
            <Link to="myfavcolorcomp" className="btn btn-primary btm-sm me-3">myfavcolour</Link>
            <Link to="formvalcomp" className="btn btn-primary btm-sm me-3">myform</Link>
            <Link to="productdashcomp" className="btn btn-primary btm-sm me-3">productdash</Link>
            <Link to="mycarouselcomp" className="btn btn-primary btm-sm me-3">mycarouselcomp</Link>
            <Link onClick={()=>logout()} className="btn btn-primary btm-sm"  style={{float:"right"}}> logout </Link>
            {/* <button type="button" ></button> */}
            <Link to="datalistcomp" className="btn btn-primary btm-sm me-3">datalistcomp</Link>


            


        </div>
    )
}
export default NavComp;