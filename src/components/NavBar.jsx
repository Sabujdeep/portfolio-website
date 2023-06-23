import React from "react";
// import Home from "./Home";
// import About from "./About";

const NavBar = () => {
    return (
        <>
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
        {/* <Home />
        <About /> */}
        </>
    )
}

export default NavBar