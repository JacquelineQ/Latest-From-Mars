import React from "react";
import { Link, Outlet } from "react-router-dom";


function Spirit() {
    return (
        <>
        <div className="roverNav">
            <Link to="spiritEarth">Spirit by Earth Date</Link>
            <Link to="spiritSol">Spirit by Martian Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Spirit;