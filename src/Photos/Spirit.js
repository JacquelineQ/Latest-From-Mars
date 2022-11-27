import React from "react";
import { Link, Outlet } from "react-router-dom";


function Spirit() {
    return (
        <>
        <div className="spiritNav">
            <Link to="spiritEarth">Spirit Earth</Link>
            <Link to="spiritSol">Spirit Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Spirit;