import React from "react";
import {
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Blog from "./Blog.js";
import Photos from "./Photos/Photos.js";
import Perseverance from "./Photos/Perseverance.js";
import Curiosity from "./Photos/Curiosity.js";
import Opportunity from "./Photos/Opportunity.js";
import Spirit from "./Photos/Spirit.js";

function NavBar() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/photos/photos">Photos</Link>
        </nav>
  
  
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/photos/photos" element={<Photos />}>
                    <Route path="perseverance" element={<Perseverance />} />
                    <Route path="curiosity" element={<Curiosity />} />
                    <Route path ="opportunity" element={<Opportunity />} />
                    <Route path="spirit" element={<Spirit />} />
                </Route>
            </Routes>
        </>
    )
}

export default NavBar;