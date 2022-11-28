import React from "react";
import { Link, Outlet } from "react-router-dom";

function Curiosity() {
    return (
        <>
        <div className="roverNav">
            <Link to="curiosityLatest">Curiosity Latest</Link>
            <Link to="curiosityEarth">Curiosity by Earth Date</Link>
            <Link to="curiositySol">Curiosity by Martian Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Curiosity;