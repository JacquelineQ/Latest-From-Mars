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
import PerseveranceLatest from "./Photos/PerseveranceLatest.js";
import PerseveranceEarth from "./Photos/PerseveranceEarth.js";
import PerseveranceSol from "./Photos/PerseveranceSol.js";
import Curiosity from "./Photos/Curiosity.js";
import CuriosityLatest from "./Photos/CuriosityLatest.js";
import CuriosityEarth from "./Photos/CuriosityEarth.js";
import CuriositySol from "./Photos/CuriositySol.js";
import Opportunity from "./Photos/Opportunity.js";
import OpportunityEarth from "./Photos/OpportunityEarth.js";
import OpportunitySol from "./Photos/OpportunitySol.js";
import Spirit from "./Photos/Spirit.js";
import SpiritEarth from "./Photos/SpiritEarth.js";
import SpiritSol from "./Photos/SpiritSol.js";

function NavBar() {
    return (
        <>
        <nav class="mainNav">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/about">About</Link>
            <Link className="navLink" to="/blog">Blog</Link>
            <Link className="navLink" to="/photos/photos">Photos</Link>
        </nav>
  
  
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/photos/photos" element={<Photos />}>
                    <Route path="perseverance" element={<Perseverance />}>
                        <Route path="perseverancelatest" element={<PerseveranceLatest />}/>
                        <Route path="perseveranceearth" element={<PerseveranceEarth />}/>
                        <Route path="perseverancesol" element={<PerseveranceSol />}/>
                    </Route>
                    <Route path="curiosity" element={<Curiosity />}>
                        <Route path="curiositylatest" element={<CuriosityLatest />} />
                        <Route path="curiosityearth" element={<CuriosityEarth />} />
                        <Route path="curiositysol" element={<CuriositySol />} />
                    </Route>
                    <Route path ="opportunity" element={<Opportunity />}>
                        <Route path ="opportunityearth" element={<OpportunityEarth />} />
                        <Route path ="opportunitysol" element={<OpportunitySol />} />
                    </Route>
                    <Route path="spirit" element={<Spirit />}>
                        <Route path="spiritearth" element={<SpiritEarth />} />
                        <Route path="spiritsol" element={<SpiritSol />} />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default NavBar;