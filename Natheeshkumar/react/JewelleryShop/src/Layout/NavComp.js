// import { Link } from "react-router-dom";

// const NavComp = () => {
//     return (
//         <div>
//             {/* <h2>this is nav component</h2> */}
//             <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>

//                 <Link to="/aboutcomp" className="btn btn-primary btm-sm me-3">About</Link>
//                 <Link to="/homecomp" className="btn btn-primary btm-sm me-3">Home</Link>

//             </nav>

//         </div>



//     )
// }
// export default NavComp;

import { Link } from "react-router-dom";

const NavComp = () => {
    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
                <Link to="/aboutcomp" className="btn btn-primary btn-sm me-3">About</Link>
                <Link to="/homecomp" className="btn btn-primary btn-sm me-3">Home</Link>
            </nav>
        </div>
    );
};

export default NavComp;