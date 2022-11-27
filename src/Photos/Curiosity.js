import React from "react";
import { Link, Outlet } from "react-router-dom";

function Curiosity() {
    return (
        <>
        <div className="curiosityNav">
            <Link to="curiosityLatest">Curiosity Latest</Link>
            <Link to="curiosityEarth">Curiosity Earth</Link>
            <Link to="curiositySol">Curiosity Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Curiosity;