import React from "react";

function Landing(){
    return(
        <div className="landing-section">
            <p className="intro"><span style={{margin: "0em 1em"}}>Introducing an era of new and exciting game development</span> • <a href="" style={{margin: "0em 1em", color: "#616161"}}>Read Mode →</a></p>
            <h2>Access the full power of <br></br>
            Python Game Development.</h2>

            <p style={{color: "#636161", fontSize: "1.8rem"}}>The ultimate game dev workshop for Python enthusiasts.<br></br>
            Learn, create, and innovate with the most versatile pl.</p>

            <a href="" style={{fontSize: "1.5em", textDecoration: "none", color: "black", padding: "0.42em 1.5em", border: "1px solid #DDDDDD", borderRadius: "30px"}}>Get Started →</a>

            <img src="/images/main-image.svg" style={{width:"100%"}}></img>
        </div>
    )
}

export default Landing;