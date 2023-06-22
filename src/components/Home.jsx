import React from "react";
import ReactTyped from "react-typed";

const Home = () => {
    return (
        <div className="home">
            <h3>Hello, I'm</h3>
            <h1>Sabujdeep Tudu</h1>
            <h2>I'm, a {" "}
            <ReactTyped 
                strings={["Full Stack Developer"]}
                typeSpeed={50}
                backSpeed={50}
                loop
                />
            </h2>
        </div>
    )
}

export default Home;