import { Link } from "react-router-dom";

const NavComp=()=>{
    return (

        <div>
            {/* <h2>this is nav component</h2> */}

            <Link to="virtualdom" className="btn btn-primary btm-sm me-4">myvirtual</Link>
            <Link to="funccomp" className="btn btn-primary btm-sm me-4">myfunc</Link>
            <Link to="hooks" className="btn btn-primary btm-sm me-4">hook</Link>
            <Link to="myfavcolorcomp" className="btn btn-primary btm-sm me-3">myfavcolour</Link>
            <Link to="formvalcomp" className="btn btn-primary btm-sm me-3">myform</Link>
            <Link to="productdashcomp" className="btn btn-primary btm-sm me-3">productdash</Link>
            <Link to="mycarouselcomp" className="btn btn-primary btm-sm">mycarouselcomp</Link>



            


        </div>
    )
}
export default NavComp;