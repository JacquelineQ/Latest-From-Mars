import React from "react";
import { Link, Outlet } from "react-router-dom";

function Perseverance() {
    return (
        <>
        <div className="perseveranceNav">
            <Link to="perseveranceLatest">Perseverance Latest</Link>
            <Link to="perseveranceEarth">Perseverance Earth</Link>
            <Link to="perseveranceSol">Perseverance Sol</Link>
        </div>

        <Outlet />
        </>
    )
}

export default Perseverance;