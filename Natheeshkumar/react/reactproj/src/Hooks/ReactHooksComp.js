import { Link, Outlet } from "react-router-dom";


const ReactHooksComp = () => {
    return (
        <div className="Container">
            {/* 
            <h2>this is React hooks Component</h2>
            <Outlet/> */}
<p>this is react hooks component</p>

            <div className="card border-info">

                <div className="card-header border-info">
                    <Link to="useeffect" className="btn btn-primary btm-sm me-3">useffect</Link>
                    <Link to="usestate" className="btn btn-primary btm-sm me-3">usehook</Link>
                </div>
                <div className="card-body border-info">
                    <Outlet/>
                </div>
                {/* <div className="card-footer border-primary">
                </div> */}
            </div>

        </div>
    )
}
export default ReactHooksComp;