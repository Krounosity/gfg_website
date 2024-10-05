import React from "react";
import "../styles/about.sass";

function About(){
    return(
        <div className="about">
            <h2>About</h2>
            <p></p>
            <a href="">Learn More </a>
            <div className="about-image">
                <img src="/images/pyhack1.svg"></img>
                <div>
                    <img src="/images/pyhack2.svg"></img>
                    <img src="/images/pyhack3.svg"></img>
                </div>
            </div>
        </div>
    );
}

export default About;