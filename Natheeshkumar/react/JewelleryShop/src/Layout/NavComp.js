
import { Link, Outlet } from "react-router-dom";

const NavComp = () => {
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent:"left", flexWrap: 'wrap', marginTop: '20px' }}>
                <Link to="/aboutcomp" className="btn btn-primary btn-sm me-3">About</Link>
                <Link to="/homecomp" className="btn btn-primary btn-sm me-3">Home</Link>
                <Link to="/productscomp" className="btn btn-primary btn-sm me-3">products</Link>
                {/* <Outlet/> */}
            </nav>
        </div>
    );
};

export default NavComp;