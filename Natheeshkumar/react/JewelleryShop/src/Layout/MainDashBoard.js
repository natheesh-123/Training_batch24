import React from 'react'
import { Outlet } from 'react-router-dom';
 

function MainDashBoard() {
    return (
        <div>

            {/* <h2 >Dash Board</h2>  */}
            <div className="card border-info mt-5">
                <div className="card-body border-info">
                    <Outlet />
                    <></>
                </div>
            </div>

        </div>
    )
}

export default MainDashBoard;
