import React from "react";
import { Link, Outlet } from "react-router-dom";

function Opportunity() {
    return (
        <>
        <div className="roverNav">
            <Link to="opportunityEarth">Opportunity by Earth Date</Link>
            <Link to="opportunitySol">Opportunity Martian Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Opportunity;