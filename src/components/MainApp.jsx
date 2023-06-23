import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Contacts from "./Contact";

const MainApp = () => {
    return(
        <>
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Resume />
            <Contacts />
        </>
    )
}

export default MainApp