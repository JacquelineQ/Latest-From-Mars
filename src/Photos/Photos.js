import React from "react";
import { Link, Outlet } from "react-router-dom";


function Photos() {
    return (
       <>
       <div className="photosNav">
            <Link to="perseverance">Perseverance</Link>
            <Link to="curiosity">Curiosity</Link>
            <Link to="opportunity">Opportunity</Link>
            <Link to="spirit">Spirit</Link>
      </div>

       <Outlet />
       </>
    )
}

export default Photos;