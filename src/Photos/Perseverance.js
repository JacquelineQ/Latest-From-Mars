import React from "react";
import { Link, Outlet } from "react-router-dom";

function Perseverance() {
    return (
        <>
        <div className="roverNav">
            <Link to="perseveranceLatest">Perseverance Latest</Link>
            <Link to="perseveranceEarth">Perseverance by Earth Date</Link>
            <Link to="perseveranceSol">Perseverance by Martian Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Perseverance;