import React from "react";
import { Link, Outlet } from "react-router-dom";

function Opportunity() {
    return (
        <>
        <div className="opportunityNav">
            <Link to="opportunityEarth">Opportunity Earth</Link>
            <Link to="opportunitySol">Opportunity Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Opportunity;