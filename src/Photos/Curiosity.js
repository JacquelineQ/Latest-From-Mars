import React from "react";
import { Link, Outlet } from "react-router-dom";

function Curiosity() {
    return (
        <>
        <div className="curiosityNav">
            <Link to="curiositylatest">Curiosity Latest</Link>
            <Link to="curiosityearth">Curiosity Earth</Link>
            <Link to="curiositysol">Curiosity Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Curiosity;